import { useParams } from 'react-router';

function UserProfile({ user = {} }) {
  const {
    name = "Anonymous",
    avatar = "https://via.placeholder.com/96",
    email,
    location,
    bio,
  } = user;

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: 12,
      border: "1px solid #e6e6e6",
      borderRadius: 8,
      maxWidth: 480,
      background: "#fff",
    },
    avatar: {
      width: 96,
      height: 96,
      borderRadius: "50%",
      objectFit: "cover",
      flexShrink: 0,
    },
    info: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    name: { margin: 0, fontSize: 18, fontWeight: 600 },
    meta: { margin: "4px 0", color: "#555", fontSize: 13 },
    bio: { marginTop: 8, color: "#333", fontSize: 13 },
  };

  const { userId } = useParams();

  return (
    <>
    <h1>{userId}</h1>
    <div style={styles.container}>
      <img src={avatar} alt={`${name} avatar`} style={styles.avatar} />
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        {email && <div style={styles.meta}>{email}</div>}
        {location && <div style={styles.meta}>{location}</div>}
        {bio && <p style={styles.bio}>{bio}</p>}
      </div>
    </div>
    </>
  );
};

export default UserProfile;