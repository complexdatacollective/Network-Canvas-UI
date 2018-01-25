import React, { Component } from 'react';
import { Spinner } from 'Components';

class TypographyPage extends Component {
  render() {
    return (
      <div className="grid__container">
        <h1>Network Canvas | Typography</h1>
        <div className="grid__container">
          <Spinner />
          <Spinner small />
          <Spinner large />
          <Spinner plain />
          <h2 className="type--page-divider">Typefaces</h2>
          <h3 className="type--page-title-large">Primary Typeface</h3>
          <h3 className="type--page-title--large">Circular Pro</h3>
          <h3 className="type--section-header--large typography__sample">ABCDEFGHIJKLM</h3>
          <h3 className="type--section-header--large typography__sample">abcdefghijklm</h3>
        </div>
        <div className="grid__container">
          <h2 className="type--page-divider">Styles</h2>
          <h3 className="type--section-header--large typography__sample type--light">Light 300</h3>
          <h3 className="type--section-header--large typography__samplet">Regular 400</h3>
          <h3 className="type--section-header--large typography__sample type--medium">Medium 500</h3>
          <h3 className="type--section-header--large typography__sample type--bold">Bold 700</h3>
        </div>
        <div className="grid__container grid--x-bookend">
          <h2 className="type--page-divider">H1</h2>
          <div className="grid__block grid__item--medium--1-4">
            <h3 className="type--page-divider--small">Styles</h3>
            <p>
              SIZE: 28PX/2.154EM<br/>
              LINE HEIGHT: 40PX/1.429EM<br/>
              ALIGNMENT: CENTER
            </p>
          </div>
          <div className="grid__block grid__item--medium--1-2">
            <h3 className="type--page-divider--small">Where It's Used</h3>
            <p className="type--title-1">Questions, form & menu headlines, menu headlines</p>
          </div>
        </div>
        <div className="grid__container grid--x-bookend">
          <h2 className="type--page-divider">H2</h2>
          <div className="grid__block grid__item--medium--1-4">
            <h3 className="type--page-divider--small">Styles</h3>
            <p>
              SIZE: 20PX/1.538EM<br/>
              LINE HEIGHT: 30PX/1.5EM
            </p>
          </div>
          <div className="grid__block grid__item--medium--1-2">
            <h3 className="type--page-divider--small">Where It's Used</h3>
            <p className="type--title-2">Form question headlines, buttons, text links</p>
          </div>
        </div>
        <div className="grid__container grid--x-bookend">
          <h2 className="type--page-divider">H3</h2>
          <div className="grid__block grid__item--medium--1-4">
            <h3 className="type--page-divider--small">Styles</h3>
            <p>
              SIZE: 17PX/1.308EM<br/>
              LINE HEIGHT: 26PX/1.5EM<br/>
              ALIGNMENT: CENTER<br/>
              WEIGHT: BOLD
            </p>
          </div>
          <div className="grid__block grid__item--medium--1-2">
            <h3 className="type--page-divider--small">Where It's Used</h3>
            <p className="type--title-3">
              Large nodes, name generator panel, ordinal bins, categorical bins
            </p>
          </div>
        </div>
        <div className="grid__container grid--x-bookend">
          <h2 className="type--page-divider">H4</h2>
          <div className="grid__block grid__item--medium--1-4">
            <h3 className="type--page-divider--small">Styles</h3>
            <p>
              SIZE: 16PX/1.231EM<br/>
              LINE HEIGHT: 24PX/1.5EM<br/>
              ALIGNMENT: LEFT
            </p>
          </div>
          <div className="grid__block grid__item--medium--1-2">
            <h3 className="type--page-divider--small">Where It's Used</h3>
            <p className="type--title-4">
              Menu items, error message headline, body copy
            </p>
          </div>
        </div>
        <div className="grid__container grid--x-bookend">
          <h2 className="type--page-divider">H5</h2>
          <div className="grid__block grid__item--medium--1-4">
            <h3 className="type--page-divider--small">Styles</h3>
            <p>
              SIZE: 12PX/1.308EM<br/>
              LINE HEIGHT: 26PX/1.5EM
            </p>
          </div>
          <div className="grid__block grid__item--medium--1-2">
            <h3 className="type--page-divider--small">Where It's Used</h3>
            <p className="type--title-5">
              Small nodes, context bins, categorial number counter, form field label
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TypographyPage;
