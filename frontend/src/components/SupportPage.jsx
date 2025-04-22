import * as React from "react";
import { Container, Box, Stack } from "@mui/material";

export default function SupportPage() {
  return (
    <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <Stack direction="row" spacing={30} justifyContent="center">
        <Box sx={{ width: 40 }} /> {/* left spacer */}
        <Box sx={{ flex: 1 }} />  {/* main content placeholder */}
        <Box sx={{ width: 40 }} /> {/* right spacer */}
      </Stack>
    </Container>
  );
}