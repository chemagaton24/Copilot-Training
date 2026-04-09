type TypographyTypes =
  | "heading-xl-bold-condensed"
  | "heading-lg-medium"
  | "heading-md-bold"
  | "heading-md-bold-condensed"
  | "heading-sm-bold-condensed"
  | "heading-sm-bold"
  | "heading-xs-bold-condensed"
  | "heading-xxs-bold-condensed"
  | "label-lg-bold-condensed"
  | "label-lg-bold"
  | "label-lg-regular"
  | "label-sm-bold-condensed"
  | "label-md-bold-condensed"
  | "label-md-bold"
  | "label-md-medium"
  | "label-md-regular"
  | "label-sm-bold"
  | "label-sm-regular"
  | "body-xl-bold"
  | "body-lg-bold"
  | "body-md-bold"
  | "body-md-regular"
  | "body-sm-regular"
  | "body-sm-regular-italic"
  | "body-xs-regular";

type TextVariantsProps = {
  [K in TypographyTypes]: {
    default: string;
    sm?: string;
    md?: string;
    lg?: string;
  };
};

export const textVariants: TextVariantsProps = {
  "heading-xl-bold-condensed": {
    default:
      "font-heading-condensed font-stretch-condensed font-bold text-heading-xl tracking-heading-xl leading-heading-xl",
    md: "md:font-heading-condensed md:font-stretch-condensed md:font-bold md:text-heading-xl md:tracking-heading-xl md:leading-heading-xl",
    lg: "lg:font-heading-condensed lg:font-stretch-condensed lg:font-bold lg:text-heading-xl lg:tracking-heading-xl lg:leading-heading-xl",
  },
  "heading-lg-medium": {
    default:
      "font-heading text-heading-lg font-medium leading-heading-lg tracking-heading-lg",
    md: "md:font-heading md:text-heading-lg md:font-medium md:leading-heading-lg md:tracking-heading-lg",
    lg: "lg:font-heading lg:text-heading-lg lg:font-medium lg:leading-heading-lg lg:tracking-heading-lg",
  },
  "heading-md-bold": {
    default:
      "font-heading text-heading-md font-bold leading-heading-md tracking-heading-md",
    md: "md:font-heading md:text-heading-md md:font-bold md:leading-heading-md md:tracking-heading-md",
    lg: "lg:font-heading lg:text-heading-md lg:font-bold lg:leading-heading-md lg:tracking-heading-md",
  },
  "heading-md-bold-condensed": {
    default:
      "font-heading-condensed font-stretch-condensed font-bold text-heading-md tracking-heading-md leading-heading-md",
    md: "md:font-heading-condensed md:font-stretch-condensed md:font-bold md:text-heading-md md:tracking-heading-md md:leading-heading-md",
    lg: "lg:font-heading-condensed lg:font-stretch-condensed lg:font-bold lg:text-heading-md lg:tracking-heading-md lg:leading-heading-md",
  },
  "heading-sm-bold-condensed": {
    default:
      "font-heading-condensed font-stretch-condensed font-bold text-heading-sm tracking-heading-sm leading-heading-sm",
    sm: "sm:font-heading-condensed sm:font-stretch-condensed sm:font-bold sm:text-heading-sm sm:tracking-heading-sm sm:leading-heading-sm",
    md: "md:font-heading-condensed md:font-stretch-condensed md:font-bold md:text-heading-sm md:tracking-heading-sm md:leading-heading-sm",
    lg: "lg:font-heading-condensed lg:font-stretch-condensed lg:font-bold lg:text-heading-sm lg:tracking-heading-sm lg:leading-heading-sm",
  },
  "heading-sm-bold": {
    default:
      "font-heading text-heading-sm font-bold leading-heading-sm tracking-heading-sm",
    md: "md:font-heading md:text-heading-sm md:font-bold md:leading-heading-sm md:tracking-heading-sm",
    lg: "lg:font-heading lg:text-heading-sm lg:font-bold lg:leading-heading-sm lg:tracking-heading-sm",
  },
  "heading-xxs-bold-condensed": {
    default:
      "font-heading-condensed font-stretch-condensed font-bold text-heading-xxs tracking-heading-xxs leading-heading-xxs",
    md: "md:font-heading-condensed md:font-stretch-condensed md:font-bold md:text-heading-xxs md:tracking-heading-xxs md:leading-heading-xxs",
    lg: "lg:font-heading-condensed lg:font-stretch-condensed lg:font-bold lg:text-heading-xxs lg:tracking-heading-xxs lg:leading-heading-xxs",
  },
  "heading-xs-bold-condensed": {
    default:
      "font-heading-condensed font-stretch-condensed font-bold text-heading-xs tracking-heading-xs leading-heading-xs",
    sm: "sm:font-heading-condensed sm:font-stretch-condensed sm:font-bold sm:text-heading-xs sm:tracking-heading-xs sm:leading-heading-xs",
    md: "md:font-heading-condensed md:font-stretch-condensed md:font-bold md:text-heading-xs md:tracking-heading-xs md:leading-heading-xs",
    lg: "lg:font-heading-condensed lg:font-stretch-condensed lg:font-bold lg:text-heading-xs lg:tracking-heading-xs lg:leading-heading-xs",
  },
  "label-lg-bold-condensed": {
    default:
      "font-label-condensed font-stretch-condensed text-label-lg font-bold leading-label-lg tracking-label-lg",
    md: "md:font-label-condensed md:font-stretch-condensed md:text-label-lg md:font-bold md:leading-label-lg md:tracking-label-lg",
    lg: "lg:font-label-condensed lg:font-stretch-condensed lg:text-label-lg lg:font-bold lg:leading-label-lg lg:tracking-label-lg",
  },
  "label-lg-bold": {
    default: "font-label text-label-lg font-bold leading-label-lg tracking-label-lg",
    md: "md:font-label md:text-label-lg md:font-bold md:leading-label-lg md:tracking-label-lg",
    lg: "lg:font-label lg:text-label-lg lg:font-bold lg:leading-label-lg lg:tracking-label-lg",
  },
  "label-lg-regular": {
    default: "font-label text-label-lg font-normal leading-label-lg tracking-label-lg",
    md: "md:font-label md:text-label-lg md:font-normal md:leading-label-lg md:tracking-label-lg",
    lg: "lg:font-label lg:text-label-lg lg:font-normal lg:leading-label-lg lg:tracking-label-lg",
  },
  "label-md-bold-condensed": {
    default:
      "font-label-condensed font-stretch-condensed text-label-md font-bold leading-label-md tracking-label-md",
    md: "md:font-label-condensed md:font-stretch-condensed md:text-label-md md:font-bold md:leading-label-md md:tracking-label-md",
    lg: "lg:font-label-condensed lg:font-stretch-condensed lg:text-label-md lg:font-bold lg:leading-label-md lg:tracking-label-md",
  },
  "label-md-bold": {
    default: "font-label text-label-md font-bold leading-label-md tracking-label-md",
    md: "md:font-label md:text-label-md md:font-bold md:leading-label-md md:tracking-label-md",
    lg: "lg:font-label lg:text-label-md lg:font-bold lg:leading-label-md lg:tracking-label-md",
  },
  "label-md-regular": {
    default: "font-label text-label-md font-normal leading-label-md tracking-label-md",
    md: "md:font-label md:text-label-md md:font-normal md:leading-label-md md:tracking-label-md",
    lg: "lg:font-label lg:text-label-md lg:font-normal lg:leading-label-md lg:tracking-label-md",
  },
  "label-md-medium": {
    default: "font-label text-label-md font-medium leading-label-md tracking-label-md",
    md: "md:font-label md:text-label-md md:font-medium md:leading-label-md md:tracking-label-md",
    lg: "lg:font-label lg:text-label-md lg:font-medium lg:leading-label-md lg:tracking-label-md",
  },
  "label-sm-bold-condensed": {
    default:
      "font-label-condensed font-stretch-condensed font-bold text-label-sm leading-label-sm tracking-label-sm",
  },
  "label-sm-bold": {
    default:
      "font-label text-label-sm leading-label-sm tracking-label-sm font-bold",
    md: "md:font-label md:text-label-sm md:leading-label-sm md:tracking-label-sm font-bold",
    lg: "lg:font-label lg:text-label-sm lg:leading-label-sm lg:tracking-label-sm lg:font-bold",
  },
  "label-sm-regular": {
    default:
      "font-label text-label-sm leading-label-sm tracking-label-sm font-normal",
    md: "md:font-label md:text-label-sm md:leading-label-sm md:tracking-label-sm font-normal",
    lg: "lg:font-label lg:text-label-sm lg:leading-label-sm lg:tracking-label-sm lg:font-normal",
  },
  "body-xl-bold": {
    default: "font-body text-body-xl leading-body-xl tracking-body-xl font-bold",
    md: "md:font-body md:text-body-xl md:leading-body-xl md:tracking-body-xl md:font-bold",
    lg: "lg:font-body lg:text-body-xl lg:leading-body-xl lg:tracking-body-xl lg:font-bold",
  },
  "body-lg-bold": {
    default: "font-body text-body-lg leading-body-lg tracking-body-lg font-bold",
    md: "md:font-body md:text-body-lg md:leading-body-lg md:tracking-body-lg md:font-bold",
    lg: "lg:font-body lg:text-body-lg lg:leading-body-lg lg:tracking-body-lg lg:font-bold",
  },
  "body-md-bold": {
    default: "font-body text-body-md leading-body-md tracking-body-md font-bold",
    md: "md:font-body md:text-body-md md:leading-body-md md:tracking-body-md md:font-bold",
    lg: "lg:font-body lg:text-body-md lg:leading-body-md lg:tracking-body-md lg:font-bold",
  },
  "body-md-regular": {
    default: "font-body text-body-md font-normal leading-body-md tracking-body-md",
    md: "md:font-body md:text-body-md md:font-normal md:leading-body-md md:tracking-body-md",
    lg: "lg:font-body lg:text-body-md lg:font-normal lg:leading-body-md lg:tracking-body-md",
  },
  "body-sm-regular": {
    default: "font-body text-body-sm font-normal leading-body-sm tracking-body-sm",
  },
  "body-sm-regular-italic": {
    default:
      "font-body text-body-sm font-normal italic leading-body-sm tracking-body-sm",
    md: "md:font-body md:text-body-sm md:font-normal md:italic md:leading-body-sm md:tracking-body-sm",
    lg: "lg:font-body lg:text-body-sm lg:font-normal lg:italic lg:leading-body-sm lg:tracking-body-sm",
  },
  "body-xs-regular": {
    default: "font-body text-body-xs leading-body-xs tracking-body-xs font-normal",
    md: "md:font-body md:text-body-xs md:leading-body-xs md:tracking-body-xs md:font-normal",
    lg: "lg:font-body lg:text-body-xs lg:leading-body-xs lg:tracking-body-xs lg:font-normal",
  },
};
