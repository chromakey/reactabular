/* eslint-disable react/prop-types */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { byColumn, header } from '../src';

describe('sort.header', function () {
  it('throws an error if sortable is not passed', function () {
    expect(
      header.bind(null, {
        getSortingColumns: () => {}
      })
    ).to.throw(Error);
  });

  it('throws an error if getSortingColumns is not passed', function () {
    expect(
      header.bind(null, {
        sortable: byColumn
      })).to.throw(Error);
  });

  it('renders value by default', function () {
    const expectedValue = 'foobar';
    const headerTransform = header({
      getSortingColumns: () => {},
      sortable: byColumn
    })(expectedValue, {});
    const renderedHeader = TestUtils.renderIntoDocument(
      <Wrapper>{headerTransform}</Wrapper>
    );
    const receivedValue = TestUtils.findRenderedDOMComponentWithClass(
      renderedHeader, 'sort-value'
    );

    expect(receivedValue.innerHTML).to.equal(expectedValue);
  });

  it('renders order if a column is selected', function () {
    const position = 0;
    const headerTransform = header({
      getSortingColumns: () => ({
        0: {
          direction: 'asc',
          position
        }
      }),
      sortable: byColumn
    })('foo', { columnIndex: 0 });
    const renderedHeader = TestUtils.renderIntoDocument(
      <Wrapper>{headerTransform}</Wrapper>
    );
    const order = TestUtils.findRenderedDOMComponentWithClass(
      renderedHeader, 'sort-order'
    );

    expect(order.innerHTML).to.equal((position + 1).toString());
  });

  it('allows styling container through the styles parameter', function () {
    const color = 'red';
    const styles = {
      container: {
        color
      }
    };

    const headerTransform = header({
      getSortingColumns: () => {},
      sortable: byColumn,
      styles
    })('foo', {});
    const renderedHeader = TestUtils.renderIntoDocument(
      <Wrapper>{headerTransform}</Wrapper>
    );
    const container = TestUtils.findRenderedDOMComponentWithClass(
      renderedHeader, 'sort-container'
    );

    expect(container.style.color).to.equal(color);
  });

  it('allows styling value through the styles parameter', function () {
    const color = 'red';
    const styles = {
      value: {
        color
      }
    };

    const headerTransform = header({
      getSortingColumns: () => {},
      sortable: byColumn,
      styles
    })('foo', {});
    const renderedHeader = TestUtils.renderIntoDocument(
      <Wrapper>{headerTransform}</Wrapper>
    );
    const value = TestUtils.findRenderedDOMComponentWithClass(
      renderedHeader, 'sort-value'
    );

    expect(value.style.color).to.equal(color);
  });

  it('allows styling order through the styles parameter', function () {
    const color = 'red';
    const styles = {
      order: {
        color
      }
    };

    const headerTransform = header({
      getSortingColumns: () => ({
        0: {
          direction: 'asc',
          position: 0
        }
      }),
      sortable: byColumn,
      styles
    })('foo', { columnIndex: 0 });
    const renderedHeader = TestUtils.renderIntoDocument(
      <Wrapper>{headerTransform}</Wrapper>
    );
    const order = TestUtils.findRenderedDOMComponentWithClass(
      renderedHeader, 'sort-order'
    );

    expect(order.style.color).to.equal(color);
  });
});

class Wrapper extends React.Component { // eslint-disable-line max-len, react/prefer-stateless-function
  render() {
    return <div>{this.props.children}</div>;
  }
}
