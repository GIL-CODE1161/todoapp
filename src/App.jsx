import React, { useEffect, useState } from 'react';
import DateDesign from './DateDesign';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [editValue, setEditValue] = useState();
  const [postId, setpostId] = useState();


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?limit=5'
        );

        const data = await response.json();

        setPosts(data);
        return () => {
          console.log('I am unmounting...');
        };
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const updatePost = (postId, newText) => {
    const updatePosts = [...posts];
    const index = updatePosts.findIndex((post) => post.id === postId)
    if (index !== -1){
      updatePosts[index].title =newText
    }
    setpostId(null)
  }
  
  const deleteItem = (postId) => {
    const updateItems = posts.filter((post) => post.id !== postId)
    setPosts(updateItems);
  }

  return (
    <div>
        <div style={{  }}>
          {posts.map((post) => (
            <div
              key={post.id}
            >
              {postId === post.id ? (
                <div 
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1px', border: '1px dashed', marginBottom: '5px' }}
                >
                  <input 
                    style={{ backgroundColor: 'transparent', border: '0px', outline: 'none', height: '100%', width: '100%' }}
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)} 
                  />
                  <button onClick={(e) => updatePost(post.id, editValue)}>save</button>
                </div>
              ):(
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px', border: '1px dashed', marginBottom: '5px' }}
                >
                  <span>{post.title}</span>
                  <div style={{ display: 'flex', justifySelf: 'end', gap: '5px', }}>
                    <button onClick={() => {setpostId(post.id), setEditValue(post.title)} }>Edit</button>
                    <button onClick={() => deleteItem(post.id)}>Delete</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <DateDesign />
    </div>
  );
}
