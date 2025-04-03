"use client";

import { useState } from "react";
import { Button, Typography, CircularProgress, Box } from "@mui/material";
import Link from "next/link";

export default function PlaneButton() {
const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

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
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column" // optional: stacks everything vertically
        minHeight="100vh">
        <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            disabled={loading}
        >
            Locate
        </Button>

        {location && (
            <Box mt={3}>
                {/*Pass the latitude and longitude of my current location. */}
                <Link href={`/trainInfo?lat=${location.lat}&lng=${location.lng}`} passHref>
                    <Button variant="outlined" color="secondary">
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
                <CircularProgress size={24} />
                <Typography variant="body2">Locating...</Typography>
            </Box>
        )}

        {error && (
            <Typography color="error" mt={2}>
                {error}
            </Typography>
        )}
    </Box>
);
}