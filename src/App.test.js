import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import App from './App';

//activate global mock here
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions'; 

const setup = () => {
  const store = storeFactory();
  return mount(<Provider store={store} ><App/></Provider>);
}

test('render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  test('getSecretWord on app mount', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});