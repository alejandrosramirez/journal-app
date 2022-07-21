import PropTypes from "prop-types";
import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ imageUrls }) => {
	return (
		<ImageList cols={4} rowHeight={200} sx={{ width: "100%", height: 500 }}>
			{imageUrls.map((imageUrl) => (
				<ImageListItem key={imageUrl}>
					<img
						src={`${imageUrl}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt="imagen de la nota"
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};

ImageGallery.propTypes = {
	imageUrls: PropTypes.array.isRequired,
};
