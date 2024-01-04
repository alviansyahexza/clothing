import DirectoryItem from "../category-item/directory-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => {
        return (
          <DirectoryItem key={id} id={id} title={title} imageUrl={imageUrl} />
        );
      })}
    </div>
  );
};

export default Directory;
