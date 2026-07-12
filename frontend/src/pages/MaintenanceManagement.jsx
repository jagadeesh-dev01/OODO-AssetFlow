import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Card, 
  CardContent, 
  Chip 
} from '@mui/material';

export default function MaintenanceManagement() {
  const columns = [
    {
      title: 'Pending',
      cards: [{ id: 'AF-0062', desc: 'Projector bulb\nnot turning on', priority: 'High' }]
    },
    {
      title: 'Approved',
      cards: [{ id: 'AF-003', desc: 'AC unit\nnoisy compressor', priority: 'Medium' }]
    },
    {
      title: 'Tech Assigned',
      cards: [{ id: 'AF-0078', desc: 'Forklift\nTech: R Varma', priority: 'High' }]
    },
    {
      title: 'In Progress',
      cards: [{ id: 'AF-897', desc: 'Printer Jam\nparts ordered', priority: 'Low' }]
    },
    {
      title: 'Resolved',
      cards: [{ id: 'AF-873', desc: 'Chair repair\nresolved 7 Jul', priority: 'Low' }]
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
        Maintenance Board
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Drag and drop asset tickets to update maintenance status.
      </Typography>

      <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 2, minHeight: '60vh' }}>
        {columns.map((col, idx) => (
          <Paper 
            key={idx} 
            elevation={0} 
            sx={{ 
              minWidth: 280, 
              bgcolor: '#f4f6f8', 
              borderRadius: 2, 
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderTop: '4px solid #1e1e1e'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {col.title}
              </Typography>
              <Chip label={col.cards.length} size="small" sx={{ fontWeight: 'bold', bgcolor: '#e0e0e0' }} />
            </Box>

            {col.cards.map((card, cardIdx) => (
              <Card key={cardIdx} elevation={2} sx={{ borderRadius: 2, cursor: 'grab', '&:active': { cursor: 'grabbing' } }}>
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                      {card.id}
                    </Typography>
                    <Chip 
                      label={card.priority} 
                      size="small" 
                      sx={{ 
                        height: 20, 
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        bgcolor: card.priority === 'High' ? '#ffebee' : card.priority === 'Medium' ? '#fff8e1' : '#f1f8e9',
                        color: card.priority === 'High' ? '#c62828' : card.priority === 'Medium' ? '#f57f17' : '#2e7d32'
                      }} 
                    />
                  </Box>
                  <Typography variant="body2" color="text.primary" sx={{ whiteSpace: 'pre-line' }}>
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>
        ))}
      </Box>
    </Container>
  );
}