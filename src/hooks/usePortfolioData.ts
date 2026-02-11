import { useState, useEffect } from 'react';
import type { PortfolioData } from "@/types/portfolio";

export function usePortfolioData() {
    const [data, setData] = useState<PortfolioData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data.json`)
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}
