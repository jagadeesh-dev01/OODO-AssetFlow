export default function MaintenanceManagement() {
  const columns = [
    { title: 'Pending', cards: [{ id: 'AF-0062', desc: 'Projector bulb\nnot turning on', bg: '#e9ecef' }] },
    { title: 'Approved', cards: [{ id: 'Af-003', desc: 'ac unit \nnoisy compresor', bg: '#e9ecef' }] },
    { title: 'Technician assigned', cards: [{ id: 'AF-0078', desc: 'forlift\ntech: R varma', bg: '#e9ecef' }] },
    { title: 'in progress', cards: [{ id: 'AF-897', desc: 'Printer Jam\nparts ordered', bg: '#e9ecef' }] },
    { title: 'Resolved', cards: [{ id: 'AF-873', desc: 'Chair repair\nresolved 7 Jul', bg: '#b2f2bb' }] },
  ];

  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <h2>Maintenance Management</h2>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
        (approval workflow as kanban board)
      </p>

      <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '20px' }}>
        {columns.map((col, idx) => (
          <div key={idx} style={{ flex: '0 0 160px', border: '1px solid #ccc', borderRadius: '6px', padding: '10px', backgroundColor: '#f8f9fa' }}>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '14px', borderBottom: '2px solid #eee', paddingBottom: '8px' }}>
              {col.title}
            </h4>
            {col.cards.map((card, cardIdx) => (
              <div key={cardIdx} style={{ backgroundColor: card.bg, padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '12px', whiteSpace: 'pre-line' }}>
                <strong>{card.id}</strong><br/>
                {card.desc}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        Approving a card moves the asset to under maintenance, resolving return it to availble
      </p>
    </div>
  );
}