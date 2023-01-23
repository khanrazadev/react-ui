import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Button,
  Pagination,
} from "@mui/material";

import axios from "axios";
import { Container } from "@mui/system";

import React, { useState, useEffect } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const [user, setUser] = useState([]);
  // fetching from Api

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  function handlePageChange(event, page) {
    setCurrentPage(page);
  }
  return (
    <Container  fixed>
      <Typography sx={{marginTop:'50px',marginBottom:'50px', textAlign: "center" }} variant="h4">
        Leadzen
      </Typography>
      <hr></hr>

      {currentItems.map((data) => {
        return (
          <Accordion sx={{ minHeight:'100px',marginTop: "20px" }}>
            <AccordionSummary>
              <Stack
                sx={{ width: "100%", justifyContent: "space-between" }}
                direction="row"
                spacing={2}
                key={data.id}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      fontSize: "0.7rem",
                    }}
                  >
                    Company
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      wordBreak: "break-word",
                    }}
                  >
                    {data.company.name}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      fontSize: "0.7rem",
                    }}
                  >
                    Name
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      wordBreak: "break-word",
                    }}
                  >
                    {data.name}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      fontSize: "0.7rem",
                    }}
                  >
                    City
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      wordBreak: "break-word",
                    }}
                  >
                    {data.address.city}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      fontSize: "0.7rem",
                    }}
                  >
                    Street
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      wordBreak: "break-word",
                    }}
                  >
                    {data.address.street}
                  </Typography>
                </Stack>

                <Button
                  size="small"
                  style={{
                    maxWidth: "10px",
                    height: "30px",
                    backgroundColor:'#9c27b0',
                  }}
                  sx={{ color: "white", fontSize: "10px" }}
                >
                  View
                </Button>
              </Stack>
            </AccordionSummary>

            {/* Detail   */}
            <AccordionDetails>
              <Container sx={{ marginBottom: "20px" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    textAlign: "left",
                    fontSize: "0.8rem",
                  }}
                >
                  Company Description.
                </Typography>
                <Typography variant="caption" sx={{}}>
                  {data.company.catchPhrase},{data.company.bs}.
                </Typography>
              </Container>
              <Container>
                <Grid2 container spacing={2} columns={16}>
                  <Grid2 xs={8}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: "0.8rem",
                        wordBreak: "break-word",
                      }}
                    >
                      Name
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {data.name}.
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: "0.8rem",
                        wordBreak: "break-word",
                      }}
                    >
                      Company
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {data.company.name}.
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: "0.8rem",
                        wordBreak: "break-word",
                      }}
                    >
                      Phone
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {data.phone}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: "0.8rem",
                        wordBreak: "break-word",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {data.email}
                    </Typography>
                  </Grid2>

                  {/* second grid */}

                  <Grid2 xs={8}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: "0.8rem",
                        wordBreak: "break-word",
                      }}
                    >
                      Username
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {data.username}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: "0.8rem",
                        wordBreak: "break-word",
                      }}
                    >
                      Website
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {data.website}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        fontSize: "0.8rem",
                        wordBreak: "break-word",
                      }}
                    >
                      Address
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      {data.address.city}, {data.address.suite},{" "}
                      {data.address.street}, {data.address.zipcode},Geo: lat:
                      {data.address.geo.lat}, lng:{data.address.geo.lng}
                    </Typography>
                  </Grid2>
                </Grid2>
              </Container>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <Stack sx={{marginTop:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>


      <Pagination
      
      count={Math.ceil(user.length / itemsPerPage)}
      page={currentPage}
      onChange={handlePageChange}
      color="secondary"
      />
      </Stack>
    </Container>
  );
}

export default App;
