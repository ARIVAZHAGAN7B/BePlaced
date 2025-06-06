import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <>
      <CssBaseline />
      {/* Color Mode toggle placeholder */}
      <Button
        variant="outlined"
        size="small"
        sx={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 10 }}
      >
        Mode
      </Button>

      <Stack
        component="main"
        direction="column"
        sx={{
          justifyContent: 'center',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            zIndex: -1,
            inset: 0,
            backgroundImage:
              'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
            backgroundRepeat: 'no-repeat',
            '@media (prefers-color-scheme: dark)': {
              backgroundImage:
                'radial-gradient(ellipse at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
            },
          },
        }}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: 'auto',
            width: '100%',
            maxWidth: 900,
          }}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: 'auto',
              width: '100%',
            }}
          >
            {/* Content component substitute */}
            <Paper
              elevation={3}
              sx={{
                flex: 1,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Welcome Back!
              </Typography>
              <Typography variant="body1">
                Some informative content can go here to describe the app or login process.
              </Typography>
            </Paper>

            {/* SignInCard substitute */}
            <Paper
              elevation={3}
              sx={{
                flexBasis: 300,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Sign In
              </Typography>
              {/* Simple inputs and button */}
              <input
                type="email"
                placeholder="Email"
                style={{ marginBottom: 12, padding: 8, fontSize: 16, width: '100%' }}
              />
              <input
                type="password"
                placeholder="Password"
                style={{ marginBottom: 12, padding: 8, fontSize: 16, width: '100%' }}
              />
              <Button variant="contained" fullWidth>
                Sign In
              </Button>
            </Paper>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
