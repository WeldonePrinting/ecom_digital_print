import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "var(--foreground)", py: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={5}>
            <a href="/">
              <img
                src={"/images/logo.png"}
                alt="logo"
                width={165}
                height={52}
                style={{ display: "block", marginBottom: 16 }}
              />
            </a>
            <Typography
              variant="body1"
              style={{
                maxWidth: "300px",
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "small",
              }}
            >
              Transform ideas into stunning prints with vibrant designs,
              lightning-fast delivery, and unmatched quality—your vision, our
              precision!
            </Typography>
          </Grid>

          {/* About Us Links */}
          <Grid item xs={12} sm={6} lg={2}>
            <Typography
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
              variant="h6"
              gutterBottom
            >
              Useful Links
            </Typography>
            <Typography
              component="a"
              href="#"
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
              }}
              display="block"
              gutterBottom
            >
              About
            </Typography>
            <Typography
              component="a"
              href="#"
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
              }}
              display="block"
              gutterBottom
            >
              Services
            </Typography>
            <Typography
              component="a"
              href="#"
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
              }}
              display="block"
              gutterBottom
            >
              Products
            </Typography>
            <Typography
              component="a"
              href="#"
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
              }}
              display="block"
            >
              Contact US
            </Typography>
          </Grid>

          {/* Customer Care Links */}
          <Grid item xs={12} sm={6} lg={2}>
            <Typography
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
              variant="h6"
              gutterBottom
            >
              Customer Support
            </Typography>
            <Typography
              component="a"
              href="#"
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
              }}
              display="block"
              gutterBottom
            >
              Help Center
            </Typography>
            <Typography
              component="a"
              href="#"
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
              }}
              display="block"
              gutterBottom
            >
              Terms &amp; Conditions
            </Typography>
            <Typography
              component="a"
              href="#"
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
              }}
              display="block"
              gutterBottom
            >
              Privacy Policy
            </Typography>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} sm={6} lg={3}>
            <Typography
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
              variant="h6"
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              style={{
                color: "var(--white)",
                fontFamily: "var(--primary-font)",
                fontSize: "14px",
              }}
            >
              No. 36/25, Mudichur Rd, near Ambedkar Statue, Raja Rajeswari
              Nagar, Shanthi Nagar, Perungalathur, Chennai 600063
            </Typography>
            <Box mt={2} display="flex" gap={1}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocalPhoneIcon style={{ color: "#FFF" }} />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ color: "#FFF" }} />
              </IconButton>

              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon style={{ color: "#FFF" }} />
              </IconButton>

              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon style={{ color: "#FFF" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={12} lg={12} style={{ width: "100%" }}>
          <Divider
            style={{
              backgroundColor: "#FFFFFF30",
              width: "100%",
              marginTop: "20px",
            }}
          />
        </Grid>

        <Grid
          container
          xs={12}
          sm={12}
          lg={12}
          style={{ justifyContent: "center" }}
        >
          <Typography
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "var(--primary-font)",
              fontSize: "14px",
              marginTop: "20px",
            }}
          >
            Copyrights © 2024 Weldone Digital. All Rights Reserved
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
