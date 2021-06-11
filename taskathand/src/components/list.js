import { Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
// import Posts from '../components/pagination/Posts';
// import Pagination from '../components/pagination/pagi';



function TodoList(props) {
  const [show, setShow] = useState(false);
  // const toggleClose = () => {
  //   setShow(!show);
  // }


  // const [posts, setPosts] = useState([props]);
  // console.log('this is posts');
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  // useEffect((data) => {
  //   const fetchPosts = () => {
  //     setLoading(true);
  //     setPosts(data);
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    props.list.map(item => (
      <Card
        variant='dark'
        bg={'light'}
        // key={idx}
        text={'dark'}
        style={{ width: '18rem' }}
        className="mb-2"
      >
        {/* <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        /> */}
        {/* <Card.Header closeLabel='Close' show={show} onClose={(toggleClose)} closeButton='true'>
        </Card.Header> */}
        <Card.Body class='card' onClose={() => setShow(true)}>
          <strong className="mr-auto">
            <ul>
              <li
                className={`complete-${item.complete.toString()}`}
                key={item._id}
              >
                <span onClick={() => props.handleComplete(item._id)}>
                  {item.text}
                </span>
              </li>
            </ul>
          </strong>
        </Card.Body>
      </Card >

    ))
  );
}

export default TodoList;
