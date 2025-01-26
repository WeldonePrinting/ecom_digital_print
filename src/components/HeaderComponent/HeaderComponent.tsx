"use client";
import {
  Button,
  Grid2,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./HeaderComponent.module.scss";
import PhoneTwoToneIcon from "@mui/icons-material/PhoneTwoTone";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";
import XIcon from "@mui/icons-material/X";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { AccountCircle, WhatsApp } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
const HeaderComponent = () => {
  const topInfoSection = (
    <Grid2 size={12} className={styles.headerContainer}>
      <Grid2 size={{ md: 6 }}>
        <div className={styles.leftHeaderDiv}>
          <p className={styles.leftParagraphFont}>
            <PhoneTwoToneIcon
              style={{ color: "#FFFFFF", blockSize: "20px" }}
            ></PhoneTwoToneIcon>
            +91-9876543210
          </p>
          <p className={styles.leftParagraphFont}>
            <MailOutlineTwoToneIcon
              style={{ color: "#FFFFFF", blockSize: "20px" }}
            ></MailOutlineTwoToneIcon>
            weldoneprinting@gmail.com
          </p>
        </div>
      </Grid2>
      <Grid2 size={{ md: 6 }}>
        <div className={styles.rightHeaderDiv}>
          <p className={styles.rightParagraphFont}>
            Follow Us :
            <InstagramIcon
              style={{
                color: "#FFFFFF",
                blockSize: "20px",
                marginLeft: "10px",
              }}
            ></InstagramIcon>
            <YouTubeIcon
              style={{
                color: "#FFFFFF",
                blockSize: "20px",
                marginLeft: "10px",
              }}
            ></YouTubeIcon>
            <FacebookRoundedIcon
              style={{
                color: "#FFFFFF",
                blockSize: "20px",
                marginLeft: "10px",
              }}
            ></FacebookRoundedIcon>
            <XIcon
              style={{
                color: "#FFFFFF",
                blockSize: "20px",
                marginLeft: "10px",
              }}
            ></XIcon>
          </p>
        </div>
      </Grid2>
    </Grid2>
  );

  const headerSection = (
    <header>

    <Grid2 size={12} container className={styles.headerSection}>
      <Grid2
        size={{ md: 2, xs: 12 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          className={styles.companyLogo}
          src={"/images/logo.png"}
          width={165}
          height={52}
          alt="logo"
        />
      </Grid2>

      <Grid2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={{ md: 5, xs: 12}}
      >
        <TextField
          id="outlined-basic"
          type="search"
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid2>

      <Grid2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={{ md: 5, xs: 12 }}
        columnSpacing={3}
        container
      >
        <Grid2 className={styles.navText}>Home</Grid2>
        <Grid2 className={styles.navText}>About Us</Grid2>
        <Grid2 className={styles.navText}>Services</Grid2>
        <Grid2 className={styles.navText}>Products</Grid2>
        {/* <Grid2>Contact Us</Grid2> */}
        <Button variant="contained" color="success" endIcon={<WhatsApp />}>
          Enquire Now
        </Button>
      </Grid2>
    </Grid2>
    </header>

  );
  return (
    <div style={{overflow:"visible"}}>
      {topInfoSection}
      {headerSection}
    </div>
  );
};
export default HeaderComponent;
