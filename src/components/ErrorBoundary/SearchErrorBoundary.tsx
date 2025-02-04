import { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { setSearchError } from "../../store/searchSlice";
import "./SearchErrorBoundary.css";

interface SearchErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<
  { children: ReactNode },
  SearchErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  handleError = () => {
    (this.props as any).setSearchError("");
    this.setState({ hasError: false });
  };

  componentDidCatch(error: Error): void {
    this.setState({ hasError: true, error });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="searchBoundary">
          <h2 className="searchBoundary_title">
            Whoops! seems like there is no such character in this dimension
          </h2>
          <button className="searchBoundary_button"
            onClick={() => {
              this.handleError();
            }}
          >
            Ehmm... Rick?
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
const props = {
  setSearchError,
};

export const SearchErrorBoundary = connect(null, props)(ErrorBoundary);
