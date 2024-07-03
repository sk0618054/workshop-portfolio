/**
 * Footer component
 *
 * Simple footer that contains quick links to some of your social media
 * or other sites. These should open in a new tab. The below component
 * is set to an empty string to not show the icon. Update the URLs below to
 * point to your accounts.
 */

import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import emailIcon from "@iconify/icons-ic/outline-email";
import githubIcon from "@iconify/icons-akar-icons/github-fill";
import linkedInIcon from "@iconify/icons-akar-icons/linkedin-fill";
import mediumIcon from "@iconify/icons-akar-icons/medium-fill";
import twitterIcon from "@iconify/icons-akar-icons/twitter-fill";
import youTubeIcon from "@iconify/icons-akar-icons/youtube-fill";

/**
 * If you want the icons in the footer to show, update the values to be a URL for
 * your account, or any link you want to have open when clicked.
 * If you don't want an icon to show, set the value to an empty string.
 */
const socialMediaLinks = {
  email: "sk0618054@gmail.com",
  gitHub: "",
  instagram: "",
  linkedIn: "sanjeet-kumar-9a187b256",
  medium: "",
  twitter: "",
  youTube: "",
};

const Footer = ({ primaryColor, secondaryColor }) => {
  return (
    <footer
      style={{
        backgroundColor: primaryColor,
        color: secondaryColor,
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem 0",
        position: "relative",
        flexWrap: "wrap",
      }}
    >
      {socialMediaLinks.email && (
        <a
          href={`mailto:${socialMediaLinks.email}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: secondaryColor }}
        >
          <Icon icon={emailIcon} width="2rem" height="2rem" />
        </a>
      )}
      {socialMediaLinks.gitHub && (
        <a
          href={socialMediaLinks.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: secondaryColor }}
        >
          <Icon icon={githubIcon} width="2rem" height="2rem" />
        </a>
      )}
      {socialMediaLinks.instagram && (
        <a
          href={socialMediaLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: secondaryColor }}
        >
          <Icon icon={linkedInIcon} width="2rem" height="2rem" />
        </a>
      )}
      {socialMediaLinks.linkedIn && (
        <a
          href={socialMediaLinks.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: secondaryColor }}
        >
          <Icon icon={linkedInIcon} width="2rem" height="2rem" />
        </a>
      )}
      {socialMediaLinks.medium && (
        <a
          href={socialMediaLinks.medium}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: secondaryColor }}
        >
          <Icon icon={mediumIcon} width="2rem" height="2rem" />
        </a>
      )}
      {socialMediaLinks.twitter && (
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: secondaryColor }}
        >
          <Icon icon={twitterIcon} width="2rem" height="2rem" />
        </a>
      )}
      {socialMediaLinks.youTube && (
        <a
          href={socialMediaLinks.youTube}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: secondaryColor }}
        >
          <Icon icon={youTubeIcon} width="2rem" height="2rem" />
        </a>
      )}
    </footer>
  );
};

Footer.defaultProps = {
  primaryColor: "#000",
  secondaryColor: "#fff",
};

Footer.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export default Footer;
