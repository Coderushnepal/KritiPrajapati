export default `SELECT p.id, p.post_title, p.post_description, p.owner_user_id, p.report_count,p.post_status,u.full_name as owner_name,p.target_amount,
p.collected_amount, p.category, p.start_date,p.end_date, u.avatar FROM posts p
INNER JOIN users u on p.owner_user_id = u.id
where p.post_status = 'active'
order by p.start_date DESC
`;
