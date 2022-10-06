export const getCommentsBySession = async (id) => fetch(`/.netlify/functions/commentsBySession`, {
    body: JSON.stringify(id),
    method: 'POST'
  })
  .then(response => response.json())
  .catch((error) => console.error(error));