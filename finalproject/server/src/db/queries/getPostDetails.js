export default `SELECT
post.id,
post.post_title,
post.post_description,
post.report_count,
post.owner_name,
post.owner_avatar,
post.target_amount,
post.collected_amount,
post.category,
post.start_date,
post.end_date,
json_agg(json_build_object('id', donation.id, 'name',donation.full_name,'amount',donation.amount, 'donar_avatar', donation.avatar, 'message',donation.message, 'donated_at', donation.donated_at)) AS donar_detail

FROM (SELECT p.id,p.post_title, p.post_description,p.owner_user_id,p.report_count, p.end_date,u.full_name as owner_name, u.avatar as owner_avatar,  p.target_amount,p.collected_amount, p.category, p.start_date FROM posts p

INNER JOIN users u on p.owner_user_id = u.id ) AS post

LEFT JOIN (SELECT d.post_id,d.donar_user_id,d.amount,d.message,d.donated_at,d.id, ud.full_name, ud.avatar FROM donations d INNER JOIN users ud on d.donar_user_id = ud.id) AS donation

on post.id = donation.post_id

WHERE post.id = :postId

group by post.id,
post.post_title,
post.post_description,
post.report_count,
post.end_date,
post.owner_user_id,
post.owner_name,
post.owner_avatar,
post.target_amount,
post.collected_amount,
post.category,
post.start_date
`;