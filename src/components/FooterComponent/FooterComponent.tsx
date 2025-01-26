import { Divider, Grid2, Typography } from "@mui/material";
import styles from "./FooterComponent.module.scss";
import Image from "next/image";

const FooterComponent = () => {
  const MENU_DATA = {
    navigation: [
      {
        menu: "Useful Links",
        submenu: ["About", "Services", "Products", "Contact US"],
      },
      {
        menu: "Customer Support",
        submenu: [
          "Shop Timings : 9:00Am to 9:00Pm",
          "+91 6374435912",
          "weldoneprinting@gmail.com",
          "www.weldoneprint.com",
        ],
      },
      {
        menu: "Our Branches",
        submenu: [
          "No. 36/25, Mudichur Rd, near Ambedkar Statue, Raja Rajeswari Nagar, Shanthi Nagar, Perungalathur, Chennai, Tamil Nadu 600063",
        ],
      },
    ],
  };

  const aboutCompany = (
    <Grid2
      className={styles.aboutCompanyContainer}
      container
      size={{ md: 12, xs: 12 }}
    >
      <Grid2 className={styles.companyLogoContainer} size={{ md: 12, xs: 12 }}>
        <Image
          className={styles.companyLogo}
          src={"/images/logo.png"}
          width={223}
          height={70}
          alt="logo"
        />
      </Grid2>
      <Grid2 className={styles.companyDescContainer} size={{ md: 12, xs: 12 }}>
        <Typography className={styles.companyDesc}>
          Transform ideas into stunning prints with vibrant designs,
          lightning-fast delivery, and unmatched quality—your vision, our
          precision!
        </Typography>
      </Grid2>
    </Grid2>
  );

  const footerMenus = MENU_DATA.navigation.map((menuItem, index) => (
    <Grid2
      key={index}
      className={styles.menusContainer}
      container
      size={{ md: 4, xs: 12 }}
    >
      <Grid2 className={styles.menusHeader} size={{ md: 12, xs: 12 }}>
        {menuItem.menu}
      </Grid2>
      {menuItem.submenu.map((submenuItem, subIndex) => (
        <Grid2
          key={subIndex}
          className={styles.menusSubHeader}
          size={{ md: 12, xs: 12 }}
        >
          {submenuItem}
        </Grid2>
      ))}
    </Grid2>
  ));

  return (
    <>
      <Grid2 className={styles.footerContainer} size={{ md: 12, xs: 12 }}>
        <Grid2 className={styles.footerMenuContainer} size={{ md: 12, xs: 12 }}>
          <Grid2 size={{ md: 4, xs: 12 }} className={styles.about}>
            {aboutCompany}
          </Grid2>
          <Grid2
            className={styles.menuSection}
            size={{ md: 8, xs: 12 }}
            container
          >
            {footerMenus}
          </Grid2>
        </Grid2>
        <Grid2 size={{ md: 12, xs: 12 }} className={styles.divider}>
          <Divider style={{ backgroundColor: "#FFFFFF30" }} />
        </Grid2>
        <Grid2 className={styles.copyrightsContainer} size={{ md: 12, xs: 12 }}>
          <Typography className={styles.copyrightstxt}>
            Copyrights © 2024 Weldone Digital. All Rights Reserved
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default FooterComponent;
