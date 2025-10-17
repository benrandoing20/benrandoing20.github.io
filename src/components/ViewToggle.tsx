interface ViewToggleProps {
  view: 'list' | 'graph';
  onViewChange: (view: 'list' | 'graph') => void;
}

const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex gap-2 mb-8">
      <button
        onClick={() => onViewChange('list')}
        className={`px-6 py-2 text-sm font-light tracking-wide border transition-all duration-300 ${
          view === 'list'
            ? 'bg-black text-white border-black'
            : 'border-black/20 text-black/70 hover:border-black hover:text-black'
        }`}
      >
        <span className="mr-2">☰</span>
        List View
      </button>
      <button
        onClick={() => onViewChange('graph')}
        className={`px-6 py-2 text-sm font-light tracking-wide border transition-all duration-300 ${
          view === 'graph'
            ? 'bg-black text-white border-black'
            : 'border-black/20 text-black/70 hover:border-black hover:text-black'
        }`}
      >
        <span className="mr-2">🔗</span>
        Knowledge Graph
      </button>
    </div>
  );
};

export default ViewToggle;

