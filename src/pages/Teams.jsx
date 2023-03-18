import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const URL = "https://www.balldontlie.io/api/v1/teams";
      const response = await axios.get(URL);
      const data = response.data.data;
      setTeams(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {teams.map((team, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{team.full_name}</Typography>
                <Typography variant="subtitle1">City: {team.city}</Typography>
                <Typography variant="subtitle1">
                  Conference: {team.conference}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Teams;
