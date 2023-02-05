import React from "react";

const Blog = () => {
  return (
    <>
      <div className='container-xxl py-5'>
        <div className='space-y-4 text-center'>
          <p className='text-uppercase text-md text-[#FEB82C] font-bold'>
          OUR BLOG
          </p>
          <h1 className='text-4xl font-semibold leading-snug'>
          Recent From Blog
          </h1>
        </div>
        <div className='flex items-center justify-between mt-5'>
          <BlogCard
            image='/images/image_1.jpg'
            author='Admin'
            comments='comment'
            date='10/02/2023'
            title='Improving Your Design & Programming Skills'
            description='A small river named Duden flows by their place.'
            readButton='Read more'
          />
          <BlogCard
            image='/images/image_2.jpg'
            author='Admin'
            comments='comment'
            date='10/02/2023'
            title='Improving Your Design & Programming Skills'
            description='A small river named Duden flows by their place.'
            readButton='Read more'
          />
          <BlogCard
            image='/images/image_3.jpg'
            author='Admin'
            comments='comment'
            date='10/02/2023'
            title='Improving Your Design & Programming Skills'
            description='A small river named Duden flows by their place.'
            readButton='Read more'
          />
        </div>
      </div>
    </>
  );
};

// blog card

const BlogCard = ({
  image,
  author,
  comments,
  date,
  title,
  description,
  readButton,
}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg'>
      <img className='w-full' src={image} alt={title} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
      <div className='px-6 text-sm'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          {author}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          {comments}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          {date}
        </span>
      </div>
      <div className='px-6 py-4'>
        <button className='bg-[#20BAA9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          {readButton}
        </button>
      </div>
    </div>
  );
};

export default Blog;
