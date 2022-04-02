export default `
SELECT
  p.id,
  p.post_title,
  p.post_description,
  p.owner_user_id,
  p.target_amount,
  p.collected_amount,
  p.category,
  p.start_date,
  STRING_AGG(d.donar_user_id, ',') AS donars
  STRING_AGG(d.amount, ',') AS amounts
  STRING_AGG(d.messsage, ',') AS messsages
  STRING_AGG(d.donated_at, ',') AS times
FROM posts p
INNER JOIN donations d on p.id = d.post_id
WHERE p.id = :postId
GROUP BY p.id, p.post_title,
p.post_description,
p.owner_user_id,
p.target_amount,
p.collected_amount,
p.category,p.start_date,
`;