import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideCloser(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            alert("You clicked outside of me!");
        }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function OutsideCloser(props) {
    const wrapperRef = useRef(null);
    useOutsideCloser(wrapperRef);

    return <div ref={wrapperRef} id={props.isCalled?"outside-closer-active":"outside-closer-inactive"}>{props.children}</div>;
}

OutsideCloser.propTypes = {
    children: PropTypes.element.isRequired,
    isCalled: PropTypes.bool.isRequired
};

export default OutsideCloser;