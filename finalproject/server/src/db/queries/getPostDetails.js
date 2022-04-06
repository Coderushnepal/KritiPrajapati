
export default `SELECT
post.id,
post.post_title,
post.post_description,

post.owner_name,
post.target_amount,
post.collected_amount,
post.category,
post.start_date,
json_agg(json_build_object('name',donation.full_name,'amount',donation.amount,'message',donation.message)) AS donar_detail


FROM (SELECT p.id,p.post_title, p.post_description,p.owner_user_id,u.full_name as owner_name,p.target_amount,
p.collected_amount, p.category, p.start_date FROM posts p
INNER JOIN users u on p.owner_user_id = u.id ) AS post
LEFT JOIN (SELECT d.post_id,d.donar_user_id,d.amount,d.message,ud.full_name FROM donations d INNER JOIN users ud on d.donar_user_id = ud.id) AS donation
 on post.id = donation.post_id

 WHERE post.id = :postId
group by post.id,
post.post_title,
post.post_description,
post.owner_user_id,
post.owner_name,
post.target_amount,
post.collected_amount,
post.category,
post.start_date`;
