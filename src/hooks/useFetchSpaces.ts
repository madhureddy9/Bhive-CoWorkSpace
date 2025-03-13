import { useState, useEffect } from "react";
import spaceData from "../data/spaces.json";

const useFetchSpaces = () => {
  const [spaces, setSpaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const calculateDistance = (lat1: number, lon1: number) => {
    const userLat = 12.9716;
    const userLon = 77.5946;

    const R = 6371;
    const dLat = ((lat1 - userLat) * Math.PI) / 180;
    const dLon = ((lon1 - userLon) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((userLat * Math.PI) / 180) *
        Math.cos((lat1 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance * 10) / 10;
  };

  useEffect(() => {
    setTimeout(() => {
      const updatedSpaces = spaceData.map((space) => ({
        ...space,
        distance: calculateDistance(space.latitude, space.longitude),
      }));

      setSpaces(updatedSpaces);
      setLoading(false);
    }, 2000);
  }, []);

  return { spaces, loading };
};

export default useFetchSpaces;
