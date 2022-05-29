export default `SELECT p.post_title, p.post_status, p.category, d.post_id, d.donar_user_id,d.id, d.amount,d.message,d.donated_at
FROM donations d
INNER JOIN posts p on d.post_id = p.id
WHERE d.donar_user_id = :userId`;