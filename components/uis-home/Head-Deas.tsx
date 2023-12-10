import React from "react";
interface HeadingDescriptionProps {
  heading?: string;
  description?: string;
  fontSizeheading?: string;
  fontSizedescription?: string;
  color?: string;
  textalign?: string;
  fontweightdes?: string |number;
  colordes?: string;
  fontweighthed?: string;
  marginhed?: string;
}

const HeadingDescription: React.FC<HeadingDescriptionProps> = ({
  fontweightdes,
  textalign,
  fontSizeheading,
  heading,
  description,
  color,
  fontSizedescription,
  colordes,
  fontweighthed,
  marginhed
}) => {
  const headingStyle: React.CSSProperties = {
    textAlign: (textalign as React.CSSProperties["textAlign"]) || "center",
    fontSize: fontSizeheading || "36px",
    marginBlockStart: "0em",
    marginBlockEnd: "0em",
    color: color || "#333",
    fontFamily: "'Poppins', sans-serif", 
    fontWeight: fontweighthed || 900, 
    margin: marginhed || "0px",
  };
  const descriptionStyle: React.CSSProperties = {
    textAlign: (textalign as React.CSSProperties["textAlign"]) || "center",
    fontSize: fontSizedescription || "15px",
    fontFamily: "'Poppins', sans-serif",    
    fontWeight: fontweightdes || 600,
    color: colordes || "#b1b4b9",
  };

  return (
    <div className="head-desc">
      <h2 className="heading" style={headingStyle}>
        {heading}
      </h2>
      <div className="description" style={descriptionStyle}>
        {description}
      </div>
    </div>
  );
};

export default HeadingDescription;
