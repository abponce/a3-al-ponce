import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
	artistId:string;
	artist:ArtistData;
	relatedArtists:ArtistData[];
	topTracks:TrackData[];
	albums:AlbumData[];

  imageUrl:string;
  genres:string[];
 

  constructor(private route: ActivatedRoute, private spotify:SpotifyService) { }

  ngOnInit() {
  	this.artistId = this.route.snapshot.paramMap.get('id');
    
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
  
    console.log("getArtist");
    this.spotify.getArtist(this.artistId).then((data) => {
      console.log(data);
      this.artist = data;
      this.imageUrl = this.artist.imageURL;
      this.genres = this.artist.genres;
      console.log(this.artist.name);
    })

    console.log("getRelatedArtists");
    this.spotify.getRelatedArtists(this.artistId).then((data) => {
      console.log(data);
      this.relatedArtists = data;
    })

    console.log("artists top tracks");
    this.spotify.getTopTracksForArtist(this.artistId).then((data) => {
      console.log("top tracks:", data);
      this.topTracks = data;
    })

    console.log("artist albums");
    this.spotify.getAlbumsForArtist(this.artistId).then((data) => {
      console.log("artist albums:", data);
      this.albums = data;
    })
  }

}