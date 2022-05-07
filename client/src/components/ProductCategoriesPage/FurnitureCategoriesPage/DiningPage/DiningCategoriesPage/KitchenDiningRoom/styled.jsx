

import styled from "styled-components";

export const VendorFilter = styled.div`
    
/* border: 2px solid #022707; */
padding: ${(props) => (props.vendorarrow === false ? "0vw" : ".5vw")};
opacity: ${(props) => (props.vendorarrow === false ? "0" : "1")};
height: ${(props) => (props.vendorarrow === false ? "0" : "19.5vw")};

`
export const PriceFilter = styled.div`
    
/* border: 2px solid #022707; */
padding: ${(props) => (props.pricearrow === false ? "0vw" : ".5vw")};
opacity: ${(props) => (props.pricearrow === false ? "0" : "1")};
height: ${(props) => (props.pricearrow === false ? "0" : "12vw")};

`

export const MaterialsFilter = styled.div`
    
/* border: 2px solid #022707; */
padding: ${(props) => (props.materialsarrow === false ? "0vw" : ".5vw")};
opacity: ${(props) => (props.materialsarrow === false ? "0" : "1")};
height: ${(props) => (props.materialsarrow === false ? "0" : "12vw")};

`

export const SizeFilter = styled.div`
    
/* border: 2px solid #022707; */
padding: ${(props) => (props.sizearrow === false ? "0vw" : ".5vw")};
opacity: ${(props) => (props.sizearrow === false ? "0" : "1")};
height: ${(props) => (props.sizearrow === false ? "0" : "12vw")};

`