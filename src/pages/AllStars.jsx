import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const AllStars = () => {
  const [allStars, setAllStars] = useState([]);
  const { playerName } = useParams();

  useEffect(() => {
    fetchAllStars(playerName);
  }, [playerName]);

  const fetchAllStars = async (playerName) => {
    try {
      const URL = "https://www.balldontlie.io/api/v1/players";
      const response = await axios.get(URL, {
        params: {
          search: playerName,
        },
      });
      const data = response.data.data;
      setAllStars(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {allStars.map((star, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  {star.first_name} {star.last_name}
                </Typography>
                <Typography variant="subtitle1">
                  Position: {star.position}
                </Typography>
                <Typography variant="subtitle1">
                  Team: {star.team.full_name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllStars;
