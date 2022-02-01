import { FC, useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating: FC<RatingProps> = ({
    rating, 
    isEditable=false,
    setRating,
    ...props
    }): JSX.Element => {
        useEffect(() => {
            constructRating(rating);
        },[rating]);
        const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
        const cnahgeDisplay = (idx: number) => {
            if(!isEditable) {
                return;
            }
            constructRating(idx);
        };

        const onClicked = (i:number) => {
            if(!isEditable || !setRating) {
                return;
            }
            setRating(i);
        };

        const handleSpace = (idx: number, event: KeyboardEvent<SVGAElement>) => {
            if(event.code !== 'Space' || !setRating) {
                return;
            }
            setRating(idx);
        };

        const constructRating = (currentRating: number) => {
            const updateArray = ratingArray.map((localRating: JSX.Element,index:number) => {
                return (
                        <span 
                            className={cn(styles.star,{
                                [styles.filled]: index < currentRating,
                                [styles.isEditable]: isEditable,
                            })}
                            onMouseEnter={() => cnahgeDisplay(index + 1)}
                            onMouseLeave={() => cnahgeDisplay(rating)}
                            onClick={() => onClicked(index + 1)}>
                                <StarIcon 
                                    tabIndex={isEditable ? 0 : -1}
                                    onKeyDown={(event: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index + 1,event) }
                                />
                        </span>          
                );
            });
            setRatingArray(updateArray);
        };

        return (
        <div {...props}>
            { ratingArray.map((r, index) => <span key={index}>{r}</span>)}
        </div>);
};