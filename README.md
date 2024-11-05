# VRooM (Remote Work × Tech)

[![](https://img.youtube.com/vi/9WgERDJqyWw/0.jpg)](https://www.youtube.com/watch?v=9WgERDJqyWw)

https://github.com/user-attachments/assets/a1c133d3-61a5-4799-ad6a-fa431af52a80

> [!IMPORTANT]
> -	This repository was forked from [jphacks/A_2207](https://github.com/jphacks/A_2207).
> - Several patches, primarily concerning package updates, were applied by one of the contributors.
> - The frontend has been newly hosted on Vercel.

- [Demo](https://a-2207.vercel.app/)
- [Introduction Video](https://www.youtube.com/watch?v=9WgERDJqyWw)
- [Project Slides](https://docs.google.com/presentation/d/e/2PACX-1vSxiOUiUHX491jBv0By4766e__TArTILHYUkJtYw2rC7eq8UwANoWotcnNaU4Ve7A64VqYLGM-q7f2v/pub?start=false&loop=false&delayms=3000)

## Product Overview
### Background (Motivation and Challenges)
Since COVID-19, the increase in solo remote work has led to a growing desire to work alongside others from home (e.g., study sessions over Zoom).

Many people have found that working with someone else helps them stay productive, even for tasks that can be difficult to focus on alone. However, online collaborative work sessions come with several challenges:
- It's hard to invite someone to work together.
    - People may hesitate to reach out or fear rejection.
- Differences in routines make it challenging to align working times.
    - Remote work has created more diverse schedules (morning/night routines).
- Working with friends often leads to excessive chatting, reducing focus.

We aimed to develop an app that can provide the feeling of working alongside others, anytime, anywhere, while addressing these challenges.

### Product Description (Detailed Explanation)
VRooM (web app) provides a sense of working with someone else. It also includes various features to enhance work efficiency.

### Features
#### 1. An avatar watches over your work
- An avatar appears on different screens, such as work mode and squat mode.
- The avatar cheers for your work or exercise with voice support.

#### 2. Promotes suitable break activities to enhance productivity
- Implemented Squat Mode, which recognizes shoulder and elbow positions and counts once criteria are met.
    - While users can take breaks on their own, VRooM allows for seamless transitions from work to rest through a timer feature, repetition counts, and encouraging voice prompts.

#### 3. Work support features enhance the working environment
- Timer feature facilitates cycles of work → break → work → break.
    - Allows easy application of techniques like [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique).
- Declaring goals upfront clarifies tasks, with input displayed on the screen to reinforce focus.
- Visualizing continuous days and hours worked helps maintain motivation.

#### 4. Easy for anyone to use
- As a web app, it can be accessed quickly via a URL.
    - Responsive design enables use on smartphones and tablets.

| Initial Screen | Work Screen | Squat Screen | Break Screen | Statistics Screen |
| ---- | ---- | ---- | ---- | ---- |
| ![Start Screen](https://user-images.githubusercontent.com/60843722/197320182-804fd11c-9658-4ef2-a664-6afb6ecee740.png) | ![Timer Screen](https://user-images.githubusercontent.com/60843722/197320187-8f1fe341-ef8b-417b-a12c-f547c8274f96.png) | ![Squat Screen](https://user-images.githubusercontent.com/60843722/197320192-22aa494c-6b27-470f-b491-124af22dcc98.png) | ![Break Screen](https://user-images.githubusercontent.com/60843722/197320202-f72e6024-0553-4ff8-990c-32ae2a90cdfe.png) | ![Analytics Screen](https://user-images.githubusercontent.com/60843722/197320212-5c7e3406-cf15-4dc2-9167-d82a9ea4d618.png) |

### Problems Solved
- Difficulty starting or staying focused on solo remote work.
- Desire to work alongside others.
- Hesitation to invite friends for online work sessions due to psychological or schedule barriers.
    - Psychological burden of inviting others.
    - Misaligned working times.
- Distraction due to chatting in online work sessions with friends.

### Competitive Advantages
- Compared to “study with me” videos on video platforms:
    - Video platforms may show distracting recommended content, but VRooM displays only necessary information for better focus.
    - VRooM asks users to declare goals upfront, displaying these in the work screen to reinforce focus on tasks.
    - Smooth transitions between work and break modes eliminate distractions. While similar workout videos exist, searching for them could lead to distractions.
    - Avatar voice prompts, including user’s name for encouragement, foster a greater sense of companionship (Currently, fixed phrases are implemented; personalized prompts are a future feature).
    - Visualizing work stats on the analytics screen helps maintain motivation over time.

### Novelty
While many existing services focus on “finding someone to work with” to fulfill the need to work with others (e.g., [techplay platform for “moku-moku” meetups](https://techplay.jp/tag/mokumoku), [MokuMoku-α by JPHACKS2021 team C_2102](https://github.com/jphacks/C_2102)), VRooM creates a virtual partner to meet this need.

The root of this need is often “to work more efficiently,” so VRooM integrates features to support productivity (timer, break mode) rather than merely creating a shared work space.

### Future Outlook
- Expanding VRM model choices
    - **Option 1**: The app provides many models for users to select. As VRM models are sold (e.g., [BOOTH](https://booth.pm/en/browse/3D%20Model)), VRooM could monetize by offering models as paid items.
    - **Option 2**: Users upload models easily (currently implemented). This allows them to work alongside their favorite characters, enhancing user experience.

- Adding more break modes for effective breaks between work (currently only squat mode).
    - Deep breathing mode
    - Stretch mode
    - Push-up mode
    - Eye stretch mode (e.g., [Santen Pharmaceutical](https://www.santen.co.jp/ja/healthcare/eye/eyecare/stretch/))
- Performance tuning for lighter operation.

### Focus Areas (Design Considerations)
- The model’s behavior and design were carefully crafted to be a more familiar partner.
- We emphasized a simple design and functional setup to enhance focus.

## Development Technology
### Technologies Used
#### API & Data
* Animation Data: [mixamo](https://www.mixamo.com/#/)
* Voice Data: [Voiced by CoeFont.cloud](https://coefont.cloud/)
* Model Data:
  * [AliciaSolid](https://3d.nicovideo.jp/works/td32797)
  * [Mirai Komachi](https://www.miraikomachi.com/download/)

#### Frameworks, Libraries, & Modules
* nextjs
* zustand
* three
  * @pixiv/three-vrm
  * @react-three/fiber
* @mediapipe

#### Infrastructure
* Firebase

### Custom Technology
#### Unique Features Developed During the Hackathon
* React app with multiple animations applied and managed for the VRM model.
  * Official @pixiv/three-vrm code exists for [animating mixamo animations](https://github.com/pixiv/three-vrm/tree/dev/packages/three-vrm-core/examples/humanoidAnimation), but it had some issues:
    1. Only a **single animation** was supported.
    2. Written in vanilla JavaScript, **not optimized for React**.
    3. Recent updates (last in October 2022) lacked documentation and live examples.
  * Thus, VRooM’s implementation of managing **multiple mixamo animations** applied to VRM models is unique.

* Optimization of squat counting in Squat Mode.
  * [Pradnya1208/Squats-angle-detection-using-OpenCV-and-mediapipe_v1](https://github.com/Pradnya1208/Squats-angle-detection-using-OpenCV-and-mediapipe_v1) uses knee angle detection, which is challenging with typical webcam angles.
  * Our algorithm recognizes dynamic elbow positions, basing squat counts on shoulder height relative to the elbow line, making it an intuitive and efficient method.
