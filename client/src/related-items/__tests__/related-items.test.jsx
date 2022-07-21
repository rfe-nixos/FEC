/**
 * @jest-environment jsdom
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import RelatedItems, { currentProductDataContext } from '../related-items';
import ProductList from '../ProductList';
import AddOutfit from '../addOutfit';
import Comparison from '../comparison';
import Product from '../product';
import { CurrentProductProvider } from '../../context';

// import  from '../';

const testCard = {
  id: 1,
  image:
    'https://ngca.net/wp-content/uploads/2020/09/image-coming-soon-placeholder.png',
  category: 'COSTCO CHIC',
  name: 'Costco Shirt',
  price: '$5',
  discountedPrice: null,
  description: 'Cool shirt from Costco',
  features: 'It is what it is',
};

describe('Related-items tests', () => {
  test('Related-items renders correctly', () => {
    const tree = renderer.create(<RelatedItems />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Comparison renders correctly', () => {
    const tree = renderer.create(<Comparison />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Product renders correctly', () => {
    const tree = renderer.create(<Product />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Comparison renders correctly', () => {
    const tree = renderer.create(<Comparison />).toJSON();
    expect().toMatchSnapshot();
  });

  // it("render ImageCarousel correctly", () => {
  //   const currentStyle = {photos: [{url: 'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg', thumbnail_url: 'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg' }]};
  //   const closeModal = () => {};
  //   const setZoomed = () => {};
  //   const expanded = false;
  //   const zoomed = false;
  //   const ImageCarouselInstance = renderer.create(<ImageCarousel currentStyle={currentStyle} setExpanded={setExpanded} setZoomed={setZoomed} expanded={expanded} zoomed={zoomed}/>)
  //   expect(ImageCarouselInstance.toJSON().props.className).toEqual('ImageCarousel');
  // });
  it('setExpanded been called when image is not expanded', () => {
    const currentStyle = {
      photos: [
        {
          url: 'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg',
          thumbnail_url:
            'https://images.newscientist.com/wp-content/uploads/2021/06/03141753/03-june_puppies.jpg',
        },
      ],
    };
    const closeModal = jest.fn();
    const overviewProductData = {}
     overviewProductData.features = []
    render(
      <currentProductDataContext>
        <Comparison
          closeModal={closeModal}
          currentProduct={{ name: 'Ian', feature: 'blue' }}
        />
      </currentProductDataContext>
    );
    fireEvent.click(screen.getByTestId('closeModal'));
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
  // test('render Related Items text', () => {
  //   render(<RelatedItems />);

  //   screen.debug();

  //   expect(screen.getByText('Related Items')).toBeInTheDocument();
  // });

  // test('Should render product', () => {
  //   const { getbyTestId } = render(<Product/>);
  //   const star = findByTestId("Star");
  //   expect(star).not.toBe('undefined');
  // });

  test('Should get somthing somwhere', async () => {
    render(
      <CurrentProductProvider>
        <RelatedItems />
      </CurrentProductProvider>
    );
    const addOutfitTest = await screen.findByTestId('addOutfit');
    expect(addOutfitTest.textContent).not.toBe('undefined');
  });
});
