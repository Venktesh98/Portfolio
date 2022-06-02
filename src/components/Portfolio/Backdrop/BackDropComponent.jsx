import React, { useCallback, useEffect, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { useStyles } from "./BackDropComponent.styles";
import { useQuotes } from "../../Services/useQuotes";
import { FaQuoteLeft } from "react-icons/fa";
import App from "../../../App";

function BackDropComponent() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [displayQuote, setDisplayQuote] = useState(false);
  const QuotesList = useQuotes();

  const [quote, setQuote] = useState(
    Math.floor(Math.random() * QuotesList.length)
  );

  const handleClose = () => {
    setLoading(false);
  };

  const onQuoteChange = useCallback(() => {
    const randomQuote =
      QuotesList[Math.floor(Math.random() * QuotesList.length)];
    setTimeout(() => {
      setQuote(randomQuote);
      setDisplayQuote(!displayQuote)
    }, 500);
  }, []);

  useEffect(() => {
    onQuoteChange();
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, [onQuoteChange]);

  return (
    <div>
      {loading ? (
        <Backdrop
          className={classes.backdrop}
          open={loading}
          onClick={handleClose}
        >
          {loading ? (
            <div className={classes.quotesContainer}>
              <div className={classes.quotes}>
                {displayQuote ? <FaQuoteLeft className={classes.quoteLeft} /> : null} <span>{quote.quote}</span>
              </div>
              <div className={classes.quoteAuthor}> - {quote.author}</div>
            </div>
          ) : null}
        </Backdrop>
      ) : (
        <App />
      )}
    </div>
  );
}

export default BackDropComponent;
