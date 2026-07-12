import { useState } from 'react';

export default function ResourceBooking() {
  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '2px solid #eee' }}>
      <h2>Resource booking</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <span style={{ color: '#666', fontSize: '12px' }}>Resource</span>
        <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', fontSize: '16px' }}>
          Conference room B2 - Tue, 7 Jul
        </p>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          {['9:00', '10:00', '11:00', '12:00', '1:00'].map(time => (
            <span key={time} style={{ padding: '6px 12px', backgroundColor: '#b2f2bb', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
              {time}
            </span>
          ))}
        </div>
        
        {/* Existing Booking Block */}
        <div style={{ backgroundColor: '#e1f5ee', padding: '12px', borderLeft: '4px solid #1e1e1e', marginBottom: '15px', maxWidth: '500px' }}>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Booked - Procurement Team - 9 to 10</p>
        </div>

        {/* Conflict Warning Block */}
        <div style={{ backgroundColor: 'transparent', padding: '12px', border: '2px dashed #e03131', maxWidth: '500px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#e03131', fontWeight: 'bold' }}>
            Requested 9:30 to 10:30 - conflict - slot is unavailble
          </p>
        </div>
      </div>

      <button style={{ padding: '10px 15px', backgroundColor: '#b2f2bb', border: '1px solid #2b8a3e', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
        Book a slot
      </button>
    </div>
  );
}