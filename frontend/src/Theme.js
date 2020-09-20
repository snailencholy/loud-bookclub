import {createMuiTheme} from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

//Blue (Header and Footer) #2065A5
//Navy (Search Bar) #314259
//Grey (Background/Button Hovered) #333333
//Grey (Cards) #E6E6E6
//Grey (Button Transparent) #333333 (75% opacity)

const brightBlue = "#2065A5"
const searchBarBlue = "#314259"
const backgroundGrey = "#333333"
const cardGrey = "#E6E6E6"

export default createMuiTheme({
    palette: {
        common: {
            bright: `${brightBlue}`,
            grey: `${backgroundGrey}`,
            navy: `${searchBarBlue}`,
        },

        primary: {
            main: brightBlue,
        }
    },

    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: "700",
            fontSize: "1rem",
        },

        search: {
            color: "#FFFFFF",
            fontFamily: "Raleway",
            textTransform: "None",
            fontWeight: "400",
            fontSize: "1rem",
        },
    }
})