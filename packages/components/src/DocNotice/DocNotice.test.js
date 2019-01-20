import React from 'react';
import { assert, expect } from 'chai';
import { AppProvider } from '@boa/base';
import * as SvgIcons from '@material-ui/icons';
import DocNotice from './DocNotice';
import { context, createShallow, createMount } from '@boa/test/utils';

describe('<DocNotice />', () => {
  let mount;
  let shallow;

  before(() => {
    mount = createMount();
    shallow = createShallow();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should render info', () => {
    const wrapper = shallow(
      <DocNotice context={context} content="info" header="info" type="info" />,
    );
    expect(
      wrapper
        .find(AppProvider)
        .childAt(0)
        .type(),
    ).to.equals(SvgIcons.Info);
    assert.strictEqual(wrapper.childAt(1).text(), 'info: ');
    assert.strictEqual(wrapper.childAt(2).text(), 'info');
  });

  it('should render warning', () => {
    const wrapper = shallow(
      <DocNotice context={context} content="warning" header="warning" type="warning" />,
    );
    expect(
      wrapper
        .find(AppProvider)
        .childAt(0)
        .type(),
    ).to.equals(SvgIcons.Warning);
    assert.strictEqual(wrapper.childAt(1).text(), 'warning: ');
    assert.strictEqual(wrapper.childAt(2).text(), 'warning');
  });

  it('should render error', () => {
    const wrapper = shallow(
      <DocNotice context={context} content="error" header="error" type="error" />,
    );
    expect(
      wrapper
        .find(AppProvider)
        .childAt(0)
        .type(),
    ).to.equals(SvgIcons.Error);
    assert.strictEqual(wrapper.childAt(1).text(), 'error: ');
    assert.strictEqual(wrapper.childAt(2).text(), 'error');
  });

  it('should render tip', () => {
    const wrapper = shallow(<DocNotice context={context} content="tip" header="tip" type="tip" />);
    expect(
      wrapper
        .find(AppProvider)
        .childAt(0)
        .type(),
    ).to.equals(SvgIcons.Star);
    assert.strictEqual(wrapper.childAt(1).text(), 'tip: ');
    assert.strictEqual(wrapper.childAt(2).text(), 'tip');
  });

  it('should mount', () => {
    mount(<DocNotice context={context} />);
  });

  it('should render without header', () => {
    const wrapper = shallow(<DocNotice context={context} content="info" type="info" />);
    expect(
      wrapper
        .find(AppProvider)
        .childAt(0)
        .type(),
    ).to.equals(SvgIcons.Info);
    assert.strictEqual(wrapper.childAt(1).text(), '');
    assert.strictEqual(wrapper.childAt(2).text(), 'info');
  });

  it('should mount when fitMode ', () => {
    mount(<DocNotice context={context} fitMode />);
  });
});
