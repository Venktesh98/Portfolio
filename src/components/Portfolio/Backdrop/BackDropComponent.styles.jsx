import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#050505",
    },
    quotesContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "30px"
    },
    quotes: {
        color: "white",
        backgroundColor: "transparent",
        fontStyle: "italic",
        fontSize: "18px"
    },
    quoteLeft: {
        height: "13px",
        width: "13px"
    },
    quoteAuthor: {
        color: "white",
        fontSize: "15px"
    }
}));
