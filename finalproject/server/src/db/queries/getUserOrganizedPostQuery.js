export default `SELECT p.post_title,p.post_description, p.post_status,p.owner_user_id, p.category, p.start_date, p.end_date, p.collected_amount, p.target_amount, p.id
FROM posts p
WHERE p.owner_user_id = :userId`;