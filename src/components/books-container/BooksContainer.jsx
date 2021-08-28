import React from 'react';
import Preloader from '../Preloader';

const BooksContainer = (props) => {
    return(
        <div>
            {props.isError ? 
                <div className="error">Error: {props.error}</div> 
                    : 
                <div className="search__results">
                    {!props.isEmpty && <h2 className="search__total">Found {props.totalBook} results</h2> }
                    {(props.isEmpty && !props.isLoad) && <svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" >
    <g className="layer">
    <title>Layer 1</title>
    <rect fill-opacity="0" height="143" id="svg_2" rx="6" ry="6" stroke="#6d41a1" stroke-width="5" transform="rotate(10 262 246.5)" width="30" x="247" y="175"/>
    <rect fill-opacity="0" height="150" id="svg_3" rx="6" ry="6" stroke="#6d41a1" stroke-width="5" width="30" x="290" y="169"/>
    <rect fill-opacity="0" height="25" id="svg_11" rx="4" ry="4" stroke="#6d41a1" stroke-width="5" width="220" x="208" y="321"/>
    <rect fill-opacity="0" height="165" id="svg_13" rx="6" ry="6" stroke="#6d41a1" stroke-width="5" width="35" x="322" y="154"/>
    <rect fill-opacity="0" height="100" id="svg_14" rx="6" ry="6" stroke="#6d41a1" stroke-width="5" width="30" x="359" y="219"/>
    <line fill-opacity="0" id="svg_17" stroke="#6d41a1" stroke-width="5" transform="rotate(12 271.975 192.256)" x1="262.949768" x2="281" y1="192.511744" y2="192"/>
    <line fill-opacity="0" id="svg_18" stroke="#6d41a1" stroke-width="5" transform="rotate(12 253 298)" x1="243.974861" x2="262.025093" y1="298.2559" y2="297.744156"/>
    <line fill-opacity="0" id="svg_20" stroke="#6d41a1" stroke-width="5" x1="296" x2="314" y1="189" y2="189"/>
    <line fill-opacity="0" id="svg_23" stroke="#6d41a1" stroke-width="5" x1="296" x2="314" y1="300" y2="300"/>
    <line fill-opacity="0" id="svg_24" stroke="#6d41a1" stroke-width="5" x1="329" x2="350" y1="175" y2="175"/>
    <line fill-opacity="0" id="svg_25" stroke="#6d41a1" stroke-width="5" x1="328" x2="351" y1="295" y2="295"/>
    <line fill-opacity="0" id="svg_26" stroke="#6d41a1" stroke-width="5" x1="365" x2="383" y1="236" y2="236"/>
    <line fill-opacity="0" id="svg_27" stroke="#6d41a1" stroke-width="5" x1="365" x2="383" y1="304" y2="304"/>
    </g>
    </svg>}            

                    <div className="search__books">          
                        {props.books}
                    </div>

                    {props.isLoad && <Preloader />}
                    {!props.isEmpty && <input type="button" onClick={props.loadMore} value="Load more"/>}
                </div>
            }
        </div>
    );
}

export default BooksContainer;