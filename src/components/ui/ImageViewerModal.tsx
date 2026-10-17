import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Maximize2
} from "lucide-react";

export interface ImageViewerSlide {
  src: string;
  label?: string;
  desc?: string;
}

interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: ImageViewerSlide[];
  currentIndex: number;
  onIndexChange?: (index: number) => void;
  language?: "en" | "vi" | "fr";
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  isOpen,
  onClose,
  slides,
  currentIndex,
  onIndexChange,
  language = "vi",
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchDistanceRef = useRef<number | null>(null);

  // Helper translations
  const texts = {
    vi: {
      zoomIn: "Phóng to (+)",
      zoomOut: "Thu nhỏ (-)",
      reset: "Đặt lại (0)",
      prev: "Ảnh trước",
      next: "Ảnh tiếp theo",
      close: "Đóng (Esc)",
      openNewTab: "Mở ảnh gốc trong tab mới",
      hint: "Cuộn chuột hoặc nhấn +/- để phóng to • Kéo giữ để di chuyển ảnh • Nhấp đúp để phóng to • Esc để đóng",
      imageCount: "Ảnh",
    },
    en: {
      zoomIn: "Zoom In (+)",
      zoomOut: "Zoom Out (-)",
      reset: "Reset Zoom (0)",
      prev: "Previous",
      next: "Next",
      close: "Close (Esc)",
      openNewTab: "Open original in new tab",
      hint: "Scroll or press +/- to zoom • Drag to pan • Double click to zoom • Esc to close",
      imageCount: "Image",
    },
    fr: {
      zoomIn: "Zoom avant (+)",
      zoomOut: "Zoom arrière (-)",
      reset: "Réinitialiser (0)",
      prev: "Précédent",
      next: "Suivant",
      close: "Fermer (Échap)",
      openNewTab: "Ouvrir l'image originale",
      hint: "Molette ou +/- pour zoomer • Glisser pour déplacer • Double-clic pour zoomer • Échap pour fermer",
      imageCount: "Image",
    },
  }[language] || {
    zoomIn: "Zoom In (+)",
    zoomOut: "Zoom Out (-)",
    reset: "Reset Zoom (0)",
    prev: "Previous",
    next: "Next",
    close: "Close (Esc)",
    openNewTab: "Open original in new tab",
    hint: "Scroll or press +/- to zoom • Drag to pan • Double click to zoom • Esc to close",
    imageCount: "Image",
  };

  const currentSlide = slides[currentIndex] || slides[0] || { src: "" };

  // Reset zoom & pan when slide changes or modal opens
  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    resetZoom();
  }, [currentIndex, isOpen, resetZoom]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Handle Zoom In / Out
  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.3, 5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => {
      const nextScale = Math.max(prev - 0.3, 0.7);
      if (nextScale <= 1) {
        setPosition({ x: 0, y: 0 });
      }
      return nextScale;
    });
  }, []);

  // Slide navigation
  const handlePrev = useCallback(() => {
    if (slides.length <= 1) return;
    const nextIdx = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    onIndexChange?.(nextIdx);
  }, [currentIndex, slides.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (slides.length <= 1) return;
    const nextIdx = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    onIndexChange?.(nextIdx);
  }, [currentIndex, slides.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === "0" || e.key.toLowerCase() === "r") {
        e.preventDefault();
        resetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext, handleZoomIn, handleZoomOut, resetZoom]);

  // Mouse wheel zoom
  useEffect(() => {
    const container = containerRef.current;
    if (!isOpen || !container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.2 : 0.83;
      setScale((prevScale) => {
        const nextScale = Math.min(Math.max(prevScale * zoomFactor, 0.7), 5);
        if (nextScale <= 1) {
          setPosition({ x: 0, y: 0 });
        }
        return nextScale;
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  // Double click to zoom in/out
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scale > 1.1) {
      resetZoom();
    } else {
      setScale(2.5);
      // Center zoom around click position roughly
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = (rect.width / 2 - (e.clientX - rect.left)) * 1.5;
        const offsetY = (rect.height / 2 - (e.clientY - rect.top)) * 1.5;
        setPosition({ x: offsetX, y: offsetY });
      }
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag with left mouse button
    if (e.button !== 0) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    hasMovedRef.current = true;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 100);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    if (hasMovedRef.current) return;
    onClose();
  };

  // Touch handlers for mobile/tablet pinch & pan
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
    } else if (e.touches.length === 2) {
      setIsDragging(false);
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y,
      });
    } else if (e.touches.length === 2 && touchDistanceRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = dist / touchDistanceRef.current;
      setScale((prevScale) => Math.min(Math.max(prevScale * ratio, 0.7), 5));
      touchDistanceRef.current = dist;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    touchDistanceRef.current = null;
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-md select-none animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Top Header Bar */}
      <div 
        className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/80 backdrop-blur-md border-b border-white/10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Slide Title & Index */}
        <div className="flex items-center gap-3 min-w-0 pr-4">
          {slides.length > 1 && (
            <span className="shrink-0 px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              {currentIndex + 1} / {slides.length}
            </span>
          )}
          <h3 className="text-sm sm:text-base font-semibold truncate text-slate-200">
            {currentSlide.label || texts.imageCount}
          </h3>
        </div>

        {/* Center: Zoom Controls Toolbar */}
        <div className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-white/10 shadow-lg">
          <button
            onClick={handleZoomOut}
            disabled={scale <= 0.7}
            className="p-1.5 rounded-full hover:bg-slate-700/80 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={texts.zoomOut}
            aria-label={texts.zoomOut}
          >
            <ZoomOut className="h-4 w-4" />
          </button>

          <button
            onClick={resetZoom}
            className="px-2.5 py-1 text-xs font-bold rounded-md hover:bg-slate-700/80 text-indigo-300 hover:text-white transition-colors cursor-pointer min-w-[54px] text-center"
            title={texts.reset}
          >
            {Math.round(scale * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            disabled={scale >= 5}
            className="p-1.5 rounded-full hover:bg-slate-700/80 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={texts.zoomIn}
            aria-label={texts.zoomIn}
          >
            <ZoomIn className="h-4 w-4" />
          </button>

          <div className="h-4 w-[1px] bg-white/15 mx-0.5" />

          <button
            onClick={resetZoom}
            className="p-1.5 rounded-full hover:bg-slate-700/80 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={texts.reset}
            aria-label={texts.reset}
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Right: Actions (External link & Close) */}
        <div className="flex items-center gap-2 pl-4">
          <a
            href={currentSlide.src}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800/80 border border-white/10 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-medium"
            title={texts.openNewTab}
          >
            <ExternalLink className="h-4 w-4" />
          </a>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-rose-500/20 border border-rose-500/30 hover:bg-rose-500/30 text-rose-300 hover:text-white transition-colors cursor-pointer"
            title={texts.close}
            aria-label={texts.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Viewport Area */}
      <div
        ref={containerRef}
        className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center cursor-default select-none"
        onClick={handleBackdropClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
      >
        {/* Floating Navigation Controls (Previous / Next) */}
        {slides.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/85 hover:bg-indigo-600 text-white border border-white/15 transition-all shadow-xl cursor-pointer hover:scale-110 active:scale-95"
              aria-label={texts.prev}
              title={texts.prev}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/85 hover:bg-indigo-600 text-white border border-white/15 transition-all shadow-xl cursor-pointer hover:scale-110 active:scale-95"
              aria-label={texts.next}
              title={texts.next}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* The Image Element with dynamic transform */}
        <div
          className={`flex items-center justify-center transition-transform ${
            isDragging ? "duration-0" : "duration-200 ease-out"
          }`}
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`,
            cursor: scale > 1.05 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentSlide.src}
            alt={currentSlide.label || "Project preview"}
            className="max-w-[90vw] max-h-[75vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/10 pointer-events-none select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Footer Area: Caption & Quick Interaction Tip */}
      <div 
        className="relative z-20 px-4 sm:px-6 py-3 bg-slate-900/85 backdrop-blur-md border-t border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Caption */}
        <div className="text-xs text-slate-300 text-center sm:text-left truncate max-w-2xl">
          {currentSlide.desc || currentSlide.label || ""}
        </div>

        {/* Interaction Tips Badge */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
          <Maximize2 className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
          <span>{texts.hint}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageViewerModal;
