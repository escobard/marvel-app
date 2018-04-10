import Enzyme, { shallow, render, mount, expect } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "babel-polyfill";
Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.expect = expect;
