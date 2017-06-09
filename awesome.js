class Post {
	constructor(title,link, author,img, img2, body, body2){
		this.title = title;
		this.link = link;
		this.author = author;
		this.img = img;
		this.img2 = img2;
		this.body = body;
		this.body2 = body2;
	}
}

const app = new Vue({

	el: '#root',

	data: {

		keyword: '',

		postlist: [
		
		new Post(
				'Ryan!!!!',
				'https://www.instagram.com/capn_rodgers/',
				'Runze He',
				'HRZ_4685.jpg',
				'FullSizeRender.jpg',
				 'Ryan is the frist friend I got in SWS! He is a super awesome maybe some time frustrating, but he and Maxx always help me when I need. ^-^ ----- Runze',
				 'Ryan is an up right dude, he’s a good guy that ain’t too outta touch with his emotions. He’s a great athlete that has a lot of heart and passion for the game. He’s also one of very few outdoorsmen at Sac Waldorf, so we were bound to be friends.----Maxx'
				),

			new Post(
				'Maxx!!!!',
				'https://www.instagram.com/maxx.lewinger/',
				'Runze He',
				'HRZ_4672.JPG',
				'IMG_2833.JPG',
				'Maxx is a really decent guy, and is willing to school Runze and I in the ways of the redneck. He is also some small percentage Native American. He is highly motivated to do what he loves, and that is a trait to be respected.----Ryan ',
				'Maxx is that guy who is always talking, who always tries to make people laugh. Even when he in a bad mood he can control him self very will, to not influence others. Help me so much in pass two years.----Runze '
				),

			new Post(
				'Runze He',
				'https://www.instagram.com/hrz66/',
				'Runze He',
				'HRZ_8816.JPG',
				'HRZ_5556.jpg',
				'Runze is from China. He is a perfectionist, and has a cool girlfriend. He is really nice, and funny even though he does not try to be. He is really hot, and sexy as hell. Though he does not always arrive on time, he is still  really good friend.----Ryan',
				'Runze is a really smart and funny guy that can only be described as savage. Im really happy to know him and i envy his out going and fun loving personality. He’s always ready to try something new with Ryan and I and i respect him for that.----Maxx'
				),
		]
	},
	computed: {
		filterlist(){
			return this.postlist.filter((post)=>{
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});
