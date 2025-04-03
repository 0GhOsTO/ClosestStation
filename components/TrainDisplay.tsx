"use client";

import { useState } from "react";
import { Button, CircularProgress, Box } from "@mui/material";
import Link from "next/link";
import {ThemeProvider, createTheme} from "@mui/material/styles";

export default function PlaneButton() {
const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#fff',
            },
        },
    });

    const handleClick = () => {
        //Geolocation is not supported in the browser unless you accept it.
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        setLoading(true);
        setError(null);

        // Find the current location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                setLoading(false);
            },
            (err) => {
                setError("Unable to retrieve your location.");
                console.error(err);
                setLoading(false);
            }
        );
    };

    return (
        <ThemeProvider theme={theme}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            minHeight="100vh">
                <img src="/MBTAT.jpg" alt="MBTA T" style={{ width: '40%', height: 'auto', margin: '2%', borderRadius: 8 }} />

            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                disabled={loading}
            >
                Find Closest Stop
            </Button>

            {location && (
                <Box mt={3}>
                    {/*Pass the latitude and longitude of my current location. */}
                    <Link href={`/trainInfo?lat=${location.lat}&lng=${location.lng}`} passHref>
                        <Button variant="contained"
                                color="secondary"
                        >
                            Go to Train Info →
                        </Button>
                    </Link>
                </Box>
            )}

            {loading && (
                <Box mt={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column">
                    <CircularProgress size={24} sx={{ color: '#fff' }}/>
                    <p style={{ color: 'white' }}>Locating...</p>
                </Box>
            )}

            {error && (
                <p style={{ color: 'white' }}>
                    {error}
                </p>
            )}
        </Box>
        </ThemeProvider>
    );
}