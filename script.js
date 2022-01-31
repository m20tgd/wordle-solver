//Store data from wordle-words.txt as string
const data = "arose,6466;rates,6345;stare,6345;tears,6345;laser,6321;arise,6299;raise,6299;least,6184;slate,6184;stale,6184;steal,6184;tales,6184;earns,6172;store,6149;aisle,6138;loser,6125;roles,6125;sorel,6125;dares,6069;dears,6069;reads,6069;acres,6032;cares,6032;races,6032;scare,6032;lanes,6011;leans,6011;anise,5989;stole,5988;rites,5982;tires,5982;tries,5982;senor,5976;snore,5976;rapes,5955;spare,5955;spear,5955;hears,5941;share,5941;shear,5941;dates,5932;stead,5932;sayer,5913;years,5913;deals,5908;leads,5908;caste,5895;cates,5895;smear,5888;aides,5886;aside,5886;ideas,5886;laces,5871;scale,5871;rents,5855;stern,5855;notes,5839;steno,5839;stone,5839;tones,5839;score,5836;tiles,5821;gears,5818;paste,5818;rages,5818;sarge,5818;spate,5818;tapes,5818;bears,5812;saber,5812;resin,5809;rinse,5809;risen,5809;siren,5809;haste,5804;hates,5804;heats,5804;lapse,5794;leaps,5794;pales,5794;pleas,5794;noise,5793;euros,5786;rouse,5786;heals,5780;leash,5780;shale,5780;yeast,5776;pores,5759;poser,5759;prose,5759;ropes,5759;sedan,5759;mates,5751;meats,5751;steam,5751;teams,5751;horse,5745;shore,5745;fears,5742;safer,5742;dotes,5736;males,5727;meals,5727;crest,5715;roast,5712;swear,5707;wares,5707;wears,5707;dries,5706;rides,5706;morse,5692;solar,5688;gates,5681;stage,5681;skate,5676;stake,5676;steak,5676;takes,5676;baste,5675;bates,5675;beast,5675;beats,5675;close,5675;coles,5675;stein,5672;cries,5669;alert,5664;alter,5664;later,5664;lakes,5652;leaks,5652;sable,5651;lines,5648;aspen,5645;lures,5641;rules,5641;strep,5638;louse,5625;saver,5624;goers,5622;ogres,5622;pesto,5622;poets,5622;topes,5622;cased,5619;ariel,5618;robes,5616;sober,5616;those,5608;fates,5605;feast,5605;feats,5605;poles,5598;slope,5598;tyres,5596;holes,5584;false,5581;fleas,5581;leafs,5581;nerds,5579;heirs,5578;hires,5578;means,5578;mensa,5578;names,5578;poise,5576;terms,5571;sweat,5570;waste,5570;diets,5569;edits,5569;tides,5569;nodes,5563;nosed,5563;sidle,5545;slide,5545;stair,5545;spade,5542;arson,5539;sonar,5539;adore,5533;cause,5532;sauce,5532;moles,5531;hades,5528;heads,5528;shade,5528;cones,5526;scone,5526;liars,5521;rails,5521;swore,5511;worse,5511;slice,5508;paces,5505;space,5505;snake,5503;sneak,5503;beans,5502;nurse,5492;runes,5492;aches,5491;chase,5491;learn,5491;renal,5491;stave,5487;vesta,5487;suite,5482;stoke,5480;pelts,5477;slept,5477;spelt,5477;alone,5475;slave,5463;lobes,5455;pause,5455;spite,5455;skier,5450;areas,5449;erase,5449;opens,5449;rears,5449;sears,5449;dents,5442;tends,5442;heist,5441;roads,5436;shone,5435;style,5435;piles,5431;spiel,5431;codes,5423;coeds,5423;opera,5419;rants,5418;trans,5418;heaps,5414;phase,5414;shape,5414;dater,5412;rated,5412;trade,5412;tread,5412;melts,5410;smelt,5410;nosey,5407;cents,5405;scent,5405;santo,5402;asked,5400;based,5399;beads,5399;snide,5396;snarl,5394;amuse,5388;items,5388;mites,5388;smite,5388;times,5388;tails,5384;omens,5382;fires,5379;fries,5379;loans,5378;salon,5378;cater,5375;crate,5375;react,5375;trace,5375;rains,5372;cages,5368;taxes,5365;texas,5365;limes,5364;miles,5364;slime,5364;smile,5364;cakes,5363;since,5359;tunes,5355;cures,5352;curse,5352;clear,5351;riots,5349;herds,5348;shred,5348;shame,5347;dopes,5346;posed,5346;wires,5344;wiser,5344;belts,5334;hosed,5332;erica,5329;fades,5329;spent,5328;tenor,5319;toner,5319;darts,5315;kites,5313;abuse,5312;asset,5312;bites,5312;seats,5312;state,5312;taste,5312;tease,5312;scope,5309;alien,5308;liane,5308;bones,5306;zeros,5303;liter,5301;chose,5295;loner,5295;sawed,5294;faces,5292;pages,5291;stove,5291;votes,5291;likes,5289;easel,5288;lease,5288;sales,5288;seals,5288;peaks,5286;speak,5286;earth,5284;hater,5284;heart,5284;penis,5282;pines,5282;snipe,5282;spine,5282;domes,5279;carts,5278;loads,5275;purse,5275;super,5275;paler,5274;pearl,5274;shake,5272;raids,5269;shine,5268;loves,5267;solve,5267;lefts,5264;ascot,5262;coast,5262;coats,5262;costa,5262;tacos,5262;usher,5261;slant,5257;teary,5256;roses,5253;sores,5253;dealt,5251;delta,5251;house,5245;comes,5242;coals,5238;saint,5235;satin,5235;stain,5235;early,5232;layer,5232;leary,5232;relay,5232;welts,5229;sutra,5228;dregs,5225;games,5224;snort,5222;makes,5219;beams,5218;files,5218;flies,5218;hopes,5218;youse,5217;mines,5215;nails,5211;saved,5211;serum,5208;realm,5207;preys,5206;ideal,5205;crane,5202;parts,5201;strap,5201;traps,5201;mouse,5192;older,5192;clues,5191;gents,5191;harts,5187;trash,5187;canoe,5186;jeans,5186;ocean,5186;lewis,5183;sperm,5181;spied,5179;irons,5176;rosin,5176;caves,5174;chest,5174;oaths,5171;cokes,5167;hides,5165;mopes,5165;poems,5165;grate,5161;great,5161;artsy,5159;satyr,5159;stray,5159;trays,5159;taker,5156;pairs,5155;paris,5155;inter,5152;homes,5151;shoal,5147;singe,5145;bakes,5143;spice,5142;hairs,5141;setup,5138;surge,5138;upset,5138;urges,5138;glare,5137;lager,5137;large,5137;leapt,5137;petal,5137;plate,5137;regal,5137;smart,5134;ester,5132;laker,5132;reset,5132;rests,5132;rubes,5132;steer,5132;trees,5132;outer,5129;route,5129;liner,5128;suave,5124;lathe,5123;mosey,5123;pulse,5114;dimes,5112;dials,5108;reels,5108;perks,5106;evils,5100;lives,5100;veils,5100;cared,5099;cedar,5099;raced,5099;lords,5095;loose,5092;loses,5092;soles,5092;herbs,5091;pokes,5090;spoke,5090;other,5088;rises,5086;siree,5086;after,5085;shave,5083;debts,5082;dunes,5079;nudes,5079;laden,5078;crews,5077;screw,5077;helps,5073;metal,5070;fines,5069;types,5069;enact,5065;flare,5061;stark,5059;brats,5058;spend,5052;water,5050;tired,5049;tried,5049;goats,5048;mules,5047;germs,5044;temps,5044;drone,5043;wages,5043;boast,5042;boats,5042;clean,5041;lance,5041;splat,5040;askew,5038;wakes,5038;skied,5037;metro,5035;swine,5034;roust,5032;tours,5032;shalt,5026;riled,5025;goals,5024;smoke,5023;drape,5022;padre,5022;raped,5022;fresh,5021;doves,5015;lions,5015;loins,5015;oiled,5009;oldie,5009;ratio,5009;heard,5008;helms,5006;recon,5006;ports,5005;sport,5005;stand,5005;saith,5004;cards,5002;exist,5002;exits,5002;guest,5001;cases,4999;cease,4999;salty,4998;vents,4997;tubes,4995;table,4994;zones,4993;savor,4991;short,4991;jones,4990;anger,4988;farts,4988;range,4988;relic,4988;shrew,4986;caper,4985;pacer,4985;recap,4985;lands,4981;hails,4980;rayed,4980;ready,4980;glues,4977;fatso,4972;genoa,4972;blues,4971;reach,4971;sleet,4971;steel,4971;tells,4971;whose,4970;scant,4968;panel,4964;penal,4964;plane,4964;story,4963;acted,4962;cadet,4962;sneer,4959;armed,4955;dream,4955;madre,4955;agile,4954;straw,4953;warts,4953;veins,4951;alike,4949;sites,4949;mason,4945;moans,4945;noose,4943;noses,4943;laced,4938;storm,4938;tripe,4935;wised,4931;prone,4929;hotel,4927;mails,4927;tykes,4927;fetus,4925;fetal,4924;spike,4923;louie,4922;trend,4922;clots,4921;meant,4921;their,4921;aunts,4918;cream,4918;idols,4912;solid,4912;peril,4911;bends,4909;ashes,4908;exams,4908;noted,4906;toned,4906;credo,4903;decor,4903;fuels,4901;stoic,4899;menus,4898;stalk,4898;talks,4898;blast,4897;pants,4891;forte,4889;craps,4888;scrap,4888;shove,4887;ranks,4886;adept,4885;grade,4885;taped,4885;yards,4883;olden,4882;yikes,4881;drake,4880;essay,4880;raked,4880;bared,4879;beard,4879;bread,4879;diner,4876;acute,4875;crash,4874;motel,4874;necks,4873;death,4871;hated,4871;riley,4869;merit,4868;timer,4868;plans,4867;repay,4866;trail,4864;trial,4864;abode,4863;adobe,4863;stork,4863;swept,4863;pedal,4861;plead,4861;flesh,4860;shelf,4860;chaos,4858;loran,4858;brews,4857;dress,4856;mikes,4856;seams,4855;tower,4854;wrote,4854;agent,4851;bails,4851;basil,4851;antsy,4849;nasty,4849;waves,4849;dives,4848;grace,4848;scary,4846;taken,4846;clone,4845;extra,4845;pains,4845;plots,4844;creak,4843;brace,4842;scald,4841;dosed,4840;doses,4840;nicer,4839;strip,4838;trips,4838;cheat,4834;moves,4834;teach,4834;lower,4830;genus,4828;angel,4827;angle,4827;flats,4827;harem,4827;pedro,4826;roped,4826;louis,4825;welsh,4825;place,4824;shirt,4824;nukes,4823;ankle,4822;teens,4822;tense,4822;tents,4822;relax,4821;scram,4821;acids,4819;delay,4819;horns,4818;mated,4818;swipe,4817;wipes,4817;soars,4816;horde,4812;fared,4809;hoist,4808;cords,4806;valet,4806;comas,4805;argue,4798;auger,4798;spoil,4798;tiger,4798;harps,4797;sharp,4797;medal,4794;raven,4794;eater,4792;frost,4792;goner,4792;tater,4792;terra,4792;treat,4792;tribe,4792;dance,4789;urine,4789;drags,4788;boner,4786;gases,4785;haute,4784;darks,4783;lacey,4782;fails,4781;bikes,4780;sakes,4780;babes,4779;bases,4779;nines,4776;chore,4775;verbs,4774;aimed,4772;farce,4772;media,4772;grape,4771;pager,4771;ramus,4771;trove,4771;voter,4771;decks,4770;waist,4770;waits,4770;prays,4769;spray,4769;users,4769;entry,4766;faxes,4762;alive,4760;camel,4757;worst,4757;moist,4755;angst,4754;gnats,4754;stang,4754;soapy,4753;souse,4753;rehab,4751;tanks,4749;gated,4748;lover,4747;racks,4746;carbs,4745;crabs,4745;actor,4742;dolce,4742;peers,4742;press,4742;spree,4742;turns,4738;cider,4736;cried,4736;radio,4733;limos,4731;harms,4730;marsh,4730;slang,4730;drops,4729;sheer,4728;clasp,4727;scalp,4727;waxes,4727;coins,4726;icons,4726;pesos,4726;poses,4726;posse,4726;monte,4725;glade,4724;sized,4723;comer,4722;sadly,4722;snout,4722;dukes,4720;hives,4720;deets,4719;steed,4719;blade,4718;carol,4718;coral,4718;lined,4715;train,4715;clash,4713;hoses,4712;shoes,4712;safes,4709;gains,4708;lured,4708;ruled,4708;gamer,4704;marge,4704;basin,4702;sabin,4702;bolts,4701;grits,4701;lemon,4701;melon,4701;sugar,4701;daisy,4700;maker,4699;amber,4698;flier,4698;lifer,4698;rifle,4698;abide,4696;skirt,4696;cuter,4695;miner,4695;stars,4695;start,4695;tarts,4695;truce,4695;towel,4693;corps,4692;crops,4692;ruins,4692;raved,4691;depot,4689;opted,4689;omega,4688;vista,4687;write,4687;tuxes,4685;latex,4684;bored,4683;orbed,4683;cubes,4682;cable,4681;owner,4681;ample,4680;maple,4680;obits,4679;toast,4679;draws,4677;girls,4677;split,4677;maids,4675;pecan,4675;scarf,4675;grasp,4674;sided,4673;sides,4673;cruel,4671;ulcer,4671;parks,4669;spark,4669;crept,4668;brent,4665;hauls,4663;silva,4663;vials,4663;dorms,4662;matey,4662;meaty,4662;calms,4660;clams,4660;paths,4660;memos,4659;moose,4659;pride,4659;cells,4658;kilos,4656;pecks,4656;quest,4656;speck,4656;boils,4655;lasso,4655;shark,4655;brash,4654;carve,4654;crave,4654;stony,4653;unite,4652;untie,4652;dykes,4651;holed,4651;torah,4651;token,4650;curie,4649;feuds,4649;fused,4649;jerks,4647;toyed,4647;amend,4645;clods,4645;colds,4645;hired,4645;named,4645;wants,4643;pours,4642;polar,4641;mealy,4638;legit,4637;boxes,4636;facet,4635;turds,4635;oasis,4633;patsy,4632;homer,4631;jokes,4631;latte,4631;barge,4628;frame,4628;hours,4628;visor,4628;brays,4626;first,4625;inept,4625;noble,4625;reign,4625;baker,4623;brake,4623;break,4623;disco,4623;yodel,4623;price,4622;arena,4619;lawns,4619;erupt,4618;hasty,4618;weary,4618;bathe,4614;zesty,4613;triad,4612;naive,4611;thine,4611;stack,4609;tacks,4609;palsy,4608;plays,4608;grams,4607;noisy,4607;stamp,4607;pests,4605;pubes,4605;serge,4605;steep,4605;steps,4605;marks,4602;rogue,4602;rouge,4602;hands,4601;reeks,4600;yours,4600;beers,4599;cited,4599;edict,4599;royal,4599;crust,4598;model,4598;gives,4597;otter,4596;retro,4596;eaves,4591;saves,4591;sheet,4591;these,4591;vibes,4591;wrist,4590;goose,4589;laird,4588;issue,4586;comet,4585;lacks,4585;slack,4585;sworn,4584;lamps,4583;obese,4583;palms,4583;psalm,4583;scout,4582;peels,4581;sleep,4581;spell,4581;liver,4580;often,4579;force,4576;grope,4575;moral,4574;sandy,4573;paced,4572;chefs,4571;naked,4570;poker,4570;acorn,4569;probe,4569;heels,4567;hells,4567;shell,4567;foxes,4566;swirl,4566;taxis,4565;olive,4564;leaky,4563;testy,4563;wraps,4563;basic,4562;drips,4562;filet,4561;pipes,4559;spies,4559;under,4559;ached,4558;tongs,4558;crime,4555;felon,4555;units,4555;holds,4554;freak,4553;knots,4553;corks,4550;rocks,4550;finer,4549;proms,4548;ultra,4547;dense,4546;needs,4546;sends,4546;mixes,4545;gleam,4543;cower,4541;yells,4539;facts,4538;meets,4538;stems,4538;blame,4537;pesky,4537;atlas,4534;lasts,4534;longs,4534;stall,4534;brags,4531;farms,4531;grabs,4531;decay,4530;craze,4529;frees,4529;reefs,4529;gator,4528;grins,4528;lodge,4528;pints,4528;rings,4528;lemur,4527;barks,4526;crisp,4525;reply,4525;wager,4523;abort,4522;ridge,4522;saran,4522;tepid,4522;fives,4521;image,4521;spurt,4521;intro,4519;wreak,4518;baths,4517;bride,4516;dared,4516;dread,4516;hints,4514;savin,4514;smell,4514;thins,4514;becks,4513;fosse,4513;volts,4513;cutie,4512;nexus,4512;scene,4509;wheat,4509;tempo,4508;hurst,4507;hurts,4507;bison,4506;ounce,4506;knelt,4505;awoke,4502;clerk,4502;honed,4502;molds,4501;roost,4499;roots,4499;sorts,4499;torso,4499;labor,4498;piled,4498;slurp,4497;swarm,4496;warms,4496;drove,4495;sewer,4494;apron,4492;leafy,4492;mimes,4492;begat,4491;shout,4491;south,4491;loath,4490;nerdy,4490;alias,4488;sails,4488;views,4486;wives,4486;whale,4485;eaten,4482;patio,4482;sword,4481;words,4481;deity,4480;claws,4479;racer,4479;rusty,4479;prime,4478;brute,4475;rolls,4475;pilar,4474;bands,4472;ethic,4471;sahib,4471;mohel,4470;fumes,4468;bagel,4467;flame,4467;lifts,4464;power,4464;beets,4462;bleak,4462;mints,4461;ensue,4459;pansy,4459;pious,4459;cover,4458;foyer,4457;gruel,4457;yield,4456;surly,4455;timed,4455;bluer,4451;tidal,4451;whore,4450;demon,4449;monde,4449;chile,4447;shaft,4447;towns,4447;fired,4446;fried,4446;sound,4446;prune,4445;cheap,4444;crows,4444;peach,4444;value,4443;towed,4441;grave,4440;lambs,4440;drain,4439;heady,4439;lousy,4439;sleek,4439;bells,4438;bless,4438;coney,4437;flaps,4437;novel,4437;snack,4436;caged,4435;lotte,4435;brave,4434;taxed,4432;fours,4429;trite,4429;flora,4428;broke,4427;manor,4425;roman,4425;sigma,4424;flash,4423;siege,4422;tuned,4422;birds,4419;crude,4419;cured,4419;ponds,4419;above,4418;sheen,4418;sikes,4417;skies,4417;asses,4416;eases,4416;stock,4413;whats,4412;divas,4411;serve,4411;sever,4411;stomp,4411;verse,4411;weird,4411;wider,4411;wired,4411;gripe,4408;sodas,4403;paper,4402;winos,4401;fixes,4399;moths,4397;mower,4397;exact,4395;clogs,4394;flake,4392;fable,4391;sting,4391;hiker,4389;locks,4389;nazis,4389;phone,4388;shawl,4388;stink,4386;ditsy,4383;ricks,4383;crass,4382;cribs,4382;scars,4382;prove,4381;tweak,4381;dated,4379;debit,4379;turks,4379;burst,4378;mache,4377;twine,4377;nudie,4376;ethyl,4374;kendo,4374;lunar,4374;boned,4373;dozer,4370;feels,4368;gusto,4368;gloat,4367;hover,4367;sicko,4367;sling,4367;yokel,4367;semen,4365;clips,4364;bouts,4362;forge,4362;gofer,4362;henry,4362;links,4362;slink,4362;glide,4361;nasal,4361;uncle,4361;decaf,4359;faced,4359;spank,4359;midst,4358;paged,4358;voted,4358;sweet,4357;dudes,4356;liked,4356;suede,4356;argon,4355;folds,4355;ladle,4355;lurks,4355;organ,4355;hangs,4350;baron,4349;chaps,4347;honey,4346;hanks,4345;shank,4345;twerp,4343;prude,4342;shady,4342;grime,4341;roach,4338;slots,4338;stool,4338;tolls,4338;tools,4338;grail,4337;plait,4337;forms,4335;decoy,4334;loved,4334;aided,4333;swell,4333;wells,4333;auras,4332;stirs,4332;speed,4329;threw,4329;diver,4328;drive,4328;ghost,4327;covet,4321;erode,4320;order,4320;rodeo,4320;began,4318;yanks,4317;sheds,4315;swami,4313;flyer,4312;video,4312;grips,4311;valor,4310;piano,4309;zebra,4309;enter,4302;beach,4301;flags,4300;worms,4300;niche,4298;wiper,4297;flask,4295;genes,4295;camps,4294;scamp,4294;money,4293;equal,4292;specs,4292;aloft,4291;float,4291;harsh,4291;fiery,4290;knees,4290;benes,4289;coupe,4289;soaps,4289;whole,4289;cunts,4288;seedy,4287;field,4285;filed,4285;hoped,4285;rainy,4283;shiva,4283;dongs,4282;mined,4282;chasm,4280;twins,4280;cagey,4279;gavel,4279;chess,4278;hazel,4277;bonds,4276;demur,4275;limey,4275;voice,4275;vests,4274;globe,4271;liven,4270;tipsy,4269;elite,4268;owned,4268;title,4268;tombs,4268;bloke,4266;actin,4265;agree,4265;eager,4265;frogs,4265;perch,4264;risky,4264;flair,4261;frail,4261;biker,4260;forks,4260;walks,4260;barre,4259;salad,4258;dopey,4257;eight,4257;inner,4256;aloud,4255;haven,4253;spawn,4253;adopt,4252;heath,4251;theta,4251;dreck,4250;elves,4250;wield,4250;board,4246;broad,4246;stick,4246;ticks,4246;casts,4245;mince,4245;scuba,4245;flute,4244;grove,4244;rowan,4244;amino,4242;apple,4241;caved,4241;flops,4241;lapel,4241;shawn,4239;smirk,4239;twice,4237;grant,4234;audio,4233;moped,4232;grows,4230;mavis,4230;smith,4230;blend,4228;tardy,4226;works,4225;doors,4223;softy,4223;licks,4222;rapid,4222;slick,4222;bangs,4221;calls,4221;class,4221;limps,4220;packs,4219;squat,4219;tango,4218;chart,4217;ebony,4217;banks,4216;badge,4215;cargo,4215;famed,4215;ahold,4214;viper,4214;baton,4212;baked,4210;croak,4210;plant,4210;today,4210;carbo,4209;cobra,4209;waken,4208;hovel,4206;burns,4205;hacks,4205;shack,4205;urged,4205;misty,4202;chins,4201;sheep,4201;alley,4199;gnome,4198;shunt,4197;grief,4195;along,4194;crush,4194;logan,4194;larch,4193;edges,4192;joins,4190;bonus,4189;brief,4189;fiber,4189;fibre,4189;flaws,4189;toons,4189;grain,4188;paint,4188;desks,4187;cross,4186;devon,4185;ducts,4185;minds,4185;brain,4182;chemo,4181;thief,4181;dairy,4180;diary,4180;drums,4178;hocus,4178;slimy,4178;elder,4175;lefty,4175;muses,4175;chair,4171;downs,4171;lists,4171;still,4171;usual,4171;mercy,4169;nance,4169;firms,4168;grass,4168;pasta,4168;pasts,4168;tapas,4168;devil,4167;dicey,4167;lived,4167;mayor,4166;loons,4165;depth,4164;paved,4164;plain,4164;barbs,4162;brass,4162;erect,4162;modus,4162;north,4161;thorn,4161;below,4160;bowel,4160;elbow,4160;rioja,4160;sight,4160;orbit,4159;tarot,4159;poked,4157;aware,4154;chute,4154;evict,4154;glaze,4154;stash,4154;dried,4153;drier,4153;redid,4153;rider,4153;mamie,4152;smack,4152;texts,4152;chops,4151;fangs,4151;honks,4149;blaze,4148;coven,4148;lunge,4147;waive,4146;white,4146;hyper,4145;blips,4144;slaps,4144;virus,4144;rival,4143;viral,4143;medic,4142;pilot,4141;faked,4140;romeo,4139;docks,4137;fiend,4136;fined,4136;typed,4136;adult,4134;movie,4131;derby,4130;halls,4130;shall,4130;slash,4130;vegan,4130;maybe,4129;cowed,4128;viola,4127;voila,4127;bitsy,4126;stays,4126;tasty,4126;cello,4122;while,4122;hertz,4121;quote,4120;boxer,4116;crier,4116;feeds,4116;ralph,4116;dings,4115;rhino,4115;audit,4112;infra,4112;party,4112;truer,4112;utter,4112;joker,4111;swank,4111;dinks,4110;kinds,4110;binds,4109;props,4109;sands,4109;drugs,4108;choke,4106;messy,4106;sixes,4106;guess,4105;segue,4105;algae,4104;bilge,4104;eagle,4104;legal,4104;seize,4103;silky,4103;sizes,4103;sally,4102;evens,4101;seven,4101;widen,4101;buses,4099;folks,4099;tests,4099;label,4098;minus,4098;monks,4096;spiny,4096;linen,4095;frisk,4093;purge,4091;mural,4090;prize,4089;syrup,4089;track,4089;ruler,4088;irony,4087;kudos,4087;tramp,4087;women,4087;shaky,4086;stood,4086;peter,4085;schmo,4084;shift,4084;glove,4083;shiny,4082;sewed,4081;swede,4081;weeds,4081;braid,4079;feces,4079;rabid,4079;rhyme,4078;giver,4077;limbs,4077;malls,4077;slams,4077;small,4077;backs,4076;mopey,4076;sofas,4076;sells,4075;flips,4074;stung,4074;keeps,4073;nicks,4073;peeks,4073;soupy,4073;beeps,4072;scans,4072;ether,4071;there,4071;three,4071;gorge,4069;roger,4069;stunk,4069;tonic,4069;sorry,4067;dusty,4066;study,4066;honda,4065;scrub,4065;blows,4063;bowls,4063;court,4062;debut,4062;dolls,4062;homey,4062;minor,4062;leper,4061;plaid,4061;dozen,4060;zoned,4060;latch,4056;amiss,4055;draft,4055;randy,4053;hairy,4052;giant,4051;lungs,4050;slung,4050;cloak,4049;costs,4049;scoot,4049;scots,4049;cigar,4048;joust,4046;takin,4046;colin,4045;elope,4045;glued,4044;ranch,4044;buyer,4043;froze,4043;shown,4043;terry,4043;moors,4042;rooms,4042;prima,4041;finds,4039;piper,4039;hello,4031;sykes,4031;envoy,4029;fuses,4029;fella,4028;nacho,4028;suing,4028;using,4028;tasks,4026;cools,4025;enema,4025;mixer,4025;about,4022;guide,4022;sauna,4022;stint,4022;torch,4021;foray,4020;knobs,4020;daily,4019;leery,4019;admit,4018;craft,4018;meter,4018;perky,4017;snowy,4015;strut,4015;truss,4015;trust,4015;altar,4014;chime,4014;nomad,4012;woken,4012;hocks,4009;moxie,4009;shock,4009;print,4008;films,4007;glass,4007;mousy,4006;vital,4006;venom,4004;winds,4004;garth,4003;totem,4002;balls,4001;elect,4001;fiver,4001;pokey,4001;total,3998;pinks,3996;snaps,3995;spans,3995;heavy,3994;merle,3994;flows,3993;offer,3993;groin,3992;pinot,3992;pinto,3992;point,3992;tiara,3992;trait,3992;hokey,3987;robin,3986;ketch,3985;chips,3984;mowed,3984;gecko,3983;shrug,3980;washy,3980;basis,3979;focus,3979;focal,3978;hiked,3976;ahead,3975;choir,3975;faint,3975;souls,3975;brush,3974;curve,3974;shrub,3974;whine,3973;gross,3972;polka,3972;posts,3972;spots,3972;stoop,3972;stops,3972;vowel,3972;dicks,3970;swamp,3969;newly,3967;sweep,3967;judas,3966;front,3962;gifts,3961;crawl,3959;grand,3958;hosts,3958;muley,3958;music,3958;shoot,3958;shots,3958;claim,3957;eking,3956;mocks,3956;plush,3956;smock,3956;spicy,3956;begin,3955;being,3955;binge,3955;empty,3955;staff,3955;getup,3954;drank,3953;quiet,3953;quite,3953;brand,3952;peace,3952;aptly,3951;final,3951;tulle,3951;femur,3948;greet,3948;loops,3948;polls,3948;pools,3948;spool,3948;flirt,3944;burke,3943;squad,3943;beret,3942;priss,3942;thyme,3941;twain,3940;vague,3940;cache,3938;tushy,3938;geeks,3936;falls,3931;minks,3929;stuck,3929;midge,3928;stump,3927;round,3926;sense,3926;twigs,3926;edema,3922;micro,3922;gowns,3920;watts,3920;rebel,3918;tumor,3918;helix,3917;crank,3916;waved,3916;knows,3915;fetch,3914;leave,3910;valve,3910;twirl,3909;bowed,3908;chant,3907;clubs,3904;lumps,3903;plums,3903;gazed,3902;petit,3902;clout,3901;enjoy,3901;moved,3901;bacon,3899;bribe,3896;index,3896;nixed,3896;roofs,3896;walls,3896;dills,3895;nudge,3895;wrath,3892;third,3891;nuked,3890;amigo,3888;wreck,3888;creed,3886;vamps,3886;feign,3885;mecca,3885;wiped,3884;gault,3883;telly,3882;hawks,3880;knife,3880;fixer,3879;avoid,3875;panic,3875;rover,3875;duvet,3874;until,3874;coded,3870;chief,3868;urban,3865;dirty,3863;chain,3861;china,3861;cloth,3860;vocal,3860;beefs,3859;kings,3859;gangs,3858;snags,3858;blume,3857;haunt,3857;picks,3856;quits,3856;spitz,3855;welch,3855;lusts,3854;sluts,3854;vicar,3854;fairy,3853;adage,3852;optic,3852;topic,3852;grubs,3851;swift,3850;drawn,3847;franc,3845;primo,3845;myths,3844;sixth,3844;dined,3843;indie,3843;thugs,3843;hicks,3842;turbo,3842;execs,3839;prank,3839;smoky,3837;ruder,3836;bogus,3835;anvil,3833;plugs,3833;johns,3832;suits,3832;lingo,3831;boost,3829;boots,3829;faxed,3829;weeks,3825;deeds,3823;doily,3823;seeds,3823;woven,3823;croft,3822;hardy,3822;hydra,3822;bendy,3820;corny,3820;troll,3818;sixty,3816;gauze,3815;synch,3815;habit,3814;hogan,3814;blush,3813;ficus,3812;bench,3811;gloss,3811;poach,3811;busty,3809;talky,3809;manic,3808;fault,3807;looks,3806;niece,3806;spits,3805;angry,3802;panty,3802;bravo,3801;broth,3801;risks,3800;world,3800;kraft,3799;snoop,3799;spoon,3799;truly,3798;gland,3797;hefty,3795;waxed,3794;dunks,3793;bland,3791;shits,3791;visas,3791;donut,3789;jawed,3788;scams,3788;bugle,3787;bulge,3787;agony,3786;kiosk,3784;quake,3784;showy,3784;pills,3781;slips,3781;spill,3781;faded,3776;genre,3775;green,3775;cramp,3774;creep,3772;crepe,3772;guard,3768;dryer,3767;given,3767;hills,3767;shill,3767;gauge,3765;bialy,3762;among,3761;tenth,3761;charm,3760;clang,3760;jacks,3760;march,3760;cheer,3758;sonny,3757;ennui,3756;jeeps,3756;snuck,3756;glory,3755;swing,3753;wings,3753;xerox,3753;count,3752;cubed,3749;major,3749;flour,3748;hexes,3748;winks,3748;swans,3747;chord,3745;mourn,3745;faith,3744;macho,3744;mocha,3744;vogue,3744;flush,3743;liege,3741;brawl,3739;silly,3739;acing,3738;mitts,3738;spiky,3737;sappy,3736;allee,3735;belie,3735;bible,3735;floss,3735;fools,3735;libel,3735;teeny,3733;cabin,3732;hyped,3732;moons,3732;favor,3731;forth,3731;lever,3730;valid,3730;horny,3729;modem,3726;trick,3726;carat,3725;funds,3722;incur,3722;puree,3722;purer,3722;upper,3722;vowed,3720;mills,3714;sacks,3713;fluke,3712;scabs,3712;skimp,3712;fleet,3711;manly,3711;notch,3711;spasm,3711;glint,3710;mirth,3710;nelly,3709;peeps,3709;proud,3709;harpy,3708;river,3708;culpa,3707;wench,3706;creme,3705;stunt,3705;query,3704;boxed,3703;diced,3703;forty,3703;armor,3702;aroma,3702;error,3700;quart,3699;joked,3698;blurt,3697;smash,3697;throw,3696;worth,3696;drift,3692;fraud,3692;logic,3691;abbey,3690;epoxy,3690;patch,3690;vault,3689;thank,3688;prowl,3686;local,3685;quota,3683;taint,3682;titan,3682;topaz,3682;punks,3679;spunk,3679;plank,3678;elude,3675;greed,3672;gemma,3671;hymns,3671;breed,3666;chino,3665;hunks,3665;renew,3664;juice,3663;goons,3662;songs,3662;stats,3662;scoop,3659;sinus,3659;evade,3658;snook,3657;tulip,3657;dodge,3656;ducks,3653;perry,3653;fishy,3652;drown,3651;dumps,3651;laura,3651;rural,3651;woman,3650;apart,3648;yacht,3648;gills,3644;seems,3642;girth,3640;right,3640;annex,3639;kills,3639;silks,3639;skill,3639;begun,3638;bills,3638;bliss,3638;salsa,3638;lanky,3636;birth,3634;flint,3634;spins,3632;porch,3631;creek,3630;teddy,3630;moods,3629;arbor,3626;frank,3626;cloud,3625;could,3625;cushy,3625;spurs,3625;match,3623;kasha,3622;weigh,3619;shins,3618;crown,3614;clamp,3613;mixed,3612;kneel,3609;soups,3609;julep,3608;madly,3608;mount,3608;delly,3606;discs,3606;ratty,3606;wimps,3606;fruit,3605;candy,3603;studs,3602;chums,3600;gassy,3599;psych,3598;leech,3597;freed,3596;blond,3595;grind,3595;aloha,3594;hallo,3594;fists,3592;genie,3592;stiff,3592;whims,3592;bayou,3590;drink,3590;piece,3589;girly,3588;emery,3586;merry,3586;tunic,3585;rally,3582;nerve,3581;never,3581;rumba,3581;squaw,3581;squid,3580;wagon,3580;dingo,3579;doing,3579;donna,3573;geese,3572;gourd,3572;cycle,3569;gouge,3569;masks,3569;fills,3568;hoops,3568;shops,3568;month,3567;seeks,3567;loyal,3566;jocks,3564;goods,3559;jerky,3558;alarm,3557;twist,3557;twits,3557;iliad,3555;grunt,3554;growl,3549;trunk,3549;brunt,3548;burnt,3548;pushy,3548;batch,3547;wooed,3545;wowed,3545;attic,3542;droll,3542;drool,3542;lofty,3542;tacit,3542;alamo,3541;limbo,3541;moola,3541;ivory,3539;toxin,3539;bunks,3536;jabot,3536;blank,3535;budge,3535;maria,3535;dusky,3534;eerie,3533;joint,3533;swill,3533;wills,3533;badly,3532;heave,3530;jaded,3530;wasps,3530;tween,3527;undue,3526;shuck,3525;chalk,3524;humps,3523;arrow,3521;touch,3521;guilt,3520;tacky,3520;lilac,3518;cooks,3517;socks,3517;whisk,3517;petty,3516;built,3514;humor,3514;lurch,3513;handy,3512;kaput,3512;crowd,3511;kerry,3511;ledge,3511;beery,3510;berry,3510;input,3508;karat,3506;bleed,3505;color,3505;whirl,3505;aught,3503;homos,3501;gooey,3500;dorky,3498;thong,3497;bigot,3495;motif,3495;signs,3495;sings,3495;amply,3494;tempt,3491;sinks,3490;skins,3490;abbot,3489;morph,3487;awake,3485;curly,3485;ember,3485;added,3483;foods,3483;burbs,3482;crypt,3482;mould,3481;mushy,3481;havoc,3480;laugh,3479;light,3479;trout,3479;tutor,3479;theme,3477;shuts,3474;visit,3474;telex,3471;fixed,3466;koala,3466;toots,3466;unity,3466;flank,3465;fudge,3465;chirp,3464;lupus,3464;pulls,3464;futon,3462;pence,3462;corky,3461;rocky,3461;briar,3459;rabbi,3459;group,3458;lucid,3458;needy,3457;magic,3454;clown,3453;troop,3452;vixen,3451;cissy,3450;gamut,3450;slush,3450;hence,3448;woods,3448;chewy,3447;scoff,3446;tally,3445;event,3444;pivot,3444;rough,3444;vigor,3444;watch,3442;ditch,3441;grift,3441;ferry,3440;fryer,3440;ozone,3440;spook,3440;swung,3436;wacko,3435;where,3433;doubt,3429;blind,3428;sushi,3428;foamy,3426;hooks,3426;shook,3426;exile,3425;tweed,3424;album,3420;afoot,3419;sniff,3419;annoy,3417;child,3417;dwarf,3417;greek,3416;jaunt,3412;moldy,3412;crimp,3411;gushy,3411;truck,3409;trump,3407;husky,3406;prior,3406;savvy,3405;filth,3403;soggy,3403;youth,3402;ships,3401;dwell,3400;grown,3400;human,3400;wrong,3400;pound,3399;toxic,3399;bossy,3397;cling,3397;bucks,3396;black,3395;brown,3394;bumps,3394;donor,3393;clink,3392;rowdy,3392;bleep,3391;canal,3391;vodka,3389;blunt,3387;disks,3387;skids,3387;swabs,3387;deuce,3386;lorry,3386;hound,3385;motor,3385;porky,3384;ditto,3383;idiot,3383;chang,3380;mouth,3377;vomit,3377;drill,3375;bombs,3372;bosom,3372;minty,3372;poofs,3369;taunt,3365;chevy,3364;churn,3364;vapid,3364;banjo,3363;heigh,3361;allow,3360;brock,3360;dildo,3359;kneed,3357;croon,3356;leggy,3355;amaze,3352;kelly,3350;kicks,3350;belly,3349;busts,3345;butts,3345;opium,3345;stubs,3345;crazy,3343;penny,3343;godly,3342;annul,3341;bring,3338;dozed,3337;prick,3336;swoop,3334;woops,3334;brink,3333;mound,3332;theft,3331;night,3330;thing,3330;pitch,3327;slugs,3327;fucks,3326;flack,3325;think,3325;frown,3324;bingo,3322;colic,3322;every,3322;skulk,3322;skull,3322;tibia,3322;birch,3321;bulbs,3321;bulls,3321;shows,3320;delve,3317;forum,3315;razor,3313;duped,3309;robot,3309;upped,3309;gimme,3308;ought,3307;tough,3307;missy,3306;coach,3305;drama,3305;weber,3304;erred,3303;tying,3302;would,3300;alibi,3298;books,3297;natty,3296;weave,3296;unfit,3295;carry,3293;ritzy,3293;waltz,3289;wharf,3289;itchy,3285;ghoul,3283;porno,3279;lying,3278;enemy,3276;fancy,3276;stuff,3275;fatal,3274;drunk,3273;sunny,3273;wheel,3272;rigor,3269;burly,3265;honor,3265;highs,3264;sighs,3264;bound,3256;hanky,3256;sexes,3256;gravy,3254;comma,3252;jesse,3250;fence,3249;dimly,3245;polio,3245;guild,3244;queer,3240;build,3238;adapt,3235;fewer,3234;blown,3233;champ,3233;wring,3233;beige,3232;cheep,3231;kissy,3231;sassy,3230;flail,3228;verge,3227;nifty,3226;molto,3224;jihad,3222;judge,3219;await,3217;owing,3217;floor,3215;moron,3212;miggs,3211;mangy,3208;pithy,3208;flaky,3206;massa,3205;lunch,3203;harry,3202;phony,3202;benny,3200;block,3199;gaudy,3199;colon,3195;jerry,3194;brick,3193;crack,3193;found,3186;yahoo,3186;thick,3185;bitch,3184;catch,3184;hatch,3184;droop,3176;eject,3176;quilt,3175;skunk,3173;blink,3172;banal,3171;awful,3169;dally,3169;fluid,3168;lazar,3168;quark,3167;occur,3166;flown,3163;excel,3158;catty,3156;again,3155;aging,3155;pinch,3154;fever,3151;wound,3151;marry,3149;britt,3142;lynch,3134;hedge,3131;imply,3131;pouch,3131;flock,3129;cumin,3128;award,3124;dutch,3124;grill,3124;union,3123;fritz,3122;brill,3118;parka,3116;width,3116;fitch,3114;villa,3110;igloo,3108;mucus,3108;aargh,3107;climb,3107;fling,3107;young,3106;snuff,3102;swims,3100;weeny,3095;cupid,3092;check,3089;cheek,3089;beech,3088;vinyl,3084;alpha,3083;downy,3082;expel,3081;venue,3081;booze,3080;clung,3080;patty,3079;quell,3079;witch,3079;jumps,3078;loony,3076;nylon,3076;clunk,3075;proxy,3073;outdo,3066;panda,3062;honky,3060;skiff,3060;pixie,3059;limit,3057;pussy,3056;apply,3055;playa,3055;karma,3049;might,3046;hussy,3042;teeth,3038;chomp,3037;brood,3033;jelly,3033;sucks,3033;clack,3032;blitz,3031;dough,3031;mumps,3031;pumps,3031;blimp,3030;privy,3028;dingy,3026;dying,3026;rumor,3022;dinky,3021;dandy,3020;humus,3017;chink,3012;tammy,3012;crock,2997;crook,2997;dotty,2997;toddy,2997;promo,2995;cough,2994;ended,2993;milky,2989;gulag,2987;bozos,2983;nancy,2983;naval,2983;wahoo,2980;freer,2976;knoll,2976;refer,2976;dolly,2973;oddly,2973;cuffs,2962;flick,2962;quoth,2962;scuff,2962;ninth,2961;going,2959;kabob,2957;truth,2954;roomy,2953;crumb,2951;burro,2946;condo,2943;chico,2942;husks,2942;finch,2941;batty,2936;tabby,2936;humid,2934;kooks,2934;boobs,2933;clump,2933;nitty,2933;queen,2930;idiom,2926;khaki,2919;mulch,2919;bawdy,2918;wrung,2916;windy,2915;hullo,2914;photo,2911;whack,2910;pinky,2907;nappy,2906;winch,2906;fight,2900;wedge,2897;gypsy,2892;dweeb,2891;comic,2889;belle,2885;puffs,2885;jenny,2884;knack,2883;potty,2883;wacky,2882;dicky,2881;caddy,2880;penne,2879;weepy,2878;blood,2872;rigid,2872;chimp,2870;butch,2867;sissy,2867;fatty,2866;radar,2866;taffy,2866;thump,2866;hippo,2865;bucko,2860;groom,2858;pluck,2858;reeve,2858;broom,2852;howdy,2851;kiddo,2851;gulch,2849;proof,2849;geeky,2847;fugue,2845;holly,2845;fussy,2843;mayan,2839;punch,2837;clock,2836;cuppa,2835;pubic,2835;murky,2833;ninja,2833;crick,2830;ditty,2830;jewel,2827;wonky,2826;hitch,2821;lucky,2816;tommy,2816;lumpy,2814;cocoa,2813;pagan,2811;bijou,2810;wussy,2808;wally,2807;dilly,2806;timid,2805;quirk,2804;tweet,2804;paddy,2803;flood,2802;blurb,2801;vouch,2800;mondo,2799;chili,2797;chill,2797;comfy,2796;mafia,2795;molly,2792;flung,2790;whiny,2787;flunk,2785;lotto,2785;rajah,2785;brava,2784;brook,2777;lymph,2773;worry,2772;beefy,2770;munch,2770;booth,2768;fungi,2768;picky,2767;fauna,2762;rugby,2762;pupil,2761;runny,2753;widow,2745;buffs,2742;booty,2740;poppa,2736;digit,2735;uncut,2735;gizmo,2725;thumb,2723;golly,2722;quack,2717;lobby,2716;tippy,2716;klutz,2715;forgo,2712;array,2710;gloom,2697;levee,2697;level,2697;chunk,2695;bunch,2694;fanny,2693;lippy,2692;bloom,2691;knock,2687;happy,2675;bimbo,2669;click,2669;momma,2669;vroom,2664;unzip,2662;swiss,2661;folly,2646;plaza,2641;edged,2639;juror,2630;couch,2625;nymph,2624;cynic,2620;pizza,2619;nutty,2616;curry,2613;lowly,2611;thigh,2607;tight,2607;cliff,2598;pooch,2598;bulky,2596;daffy,2590;onion,2590;punky,2590;chaff,2581;vying,2581;shush,2578;hunky,2576;kitty,2574;bitty,2573;ducky,2564;bwana,2557;maxim,2555;chump,2553;billy,2549;griff,2545;nippy,2543;moody,2540;fifth,2531;mooch,2531;icing,2525;llama,2524;aback,2523;hurry,2522;livid,2517;wimpy,2517;hutch,2504;fifty,2503;japan,2489;gammy,2485;civil,2480;filly,2479;hoppy,2479;juicy,2477;bongo,2472;dodgy,2470;doggy,2470;goody,2470;rummy,2469;witty,2468;oomph,2454;willy,2444;cocky,2428;baggy,2409;gabby,2409;ginny,2406;tooth,2405;combo,2402;kinky,2401;jolly,2400;nanny,2400;jumbo,2399;putty,2399;femme,2382;mixup,2381;funky,2377;manna,2375;known,2362;dowdy,2359;woody,2359;goopy,2356;quick,2354;lolly,2353;cluck,2352;ganja,2352;motto,2352;plump,2350;walla,2343;faggy,2339;hooky,2337;hobby,2336;tummy,2332;hunch,2331;cubic,2329;furry,2323;bumpy,2305;giddy,2303;daddy,2297;guava,2290;chick,2289;poofy,2280;tutti,2279;whoop,2273;madam,2272;vigil,2266;kicky,2261;tizzy,2260;tubby,2256;bully,2232;titty,2210;queue,2207;cuddy,2200;piggy,2189;pappy,2183;which,2183;fully,2162;gonzo,2159;doozy,2151;goofy,2143;junky,2131;divvy,2109;hooch,2092;bunny,2083;kappa,2083;bluff,2061;dummy,2056;muddy,2056;kayak,2041;ninny,2037;gamma,2021;funny,2013;jumpy,1989;poppy,1987;dizzy,1984;buddy,1980;chuck,1972;humph,1970;cubby,1943;wiggy,1941;mommy,1920;whiff,1893;mimic,1872;zippy,1870;hubby,1852;kooky,1845;bobby,1844;booby,1844;muggy,1805;jimmy,1800;puffy,1796;woozy,1789;huffy,1782;pygmy,1778;buggy,1729;fluff,1698;jiffy,1654;buffy,1653;mamma,1652;vivid,1645;civic,1608;puppy,1503;mummy,1436;yummy,1436;fuzzy,1340"
//Split the data to create an array of text and LFScore pairs
const pairs = data.split(';');

//Create a class of Word to store the data pairs in objects
class Word{
    constructor(text,lfs){
        this.text = text;
        this.lfs = lfs;
    }
}

//Create an array to store all the word objects
let wordsToSearch = [];
//Iterate through pairs and for each one add a Word object to wordsToSearch using 
//the text and lfs from the pair
pairs.forEach(pair =>{
    pair = pair.split(',');
    const wordObj = new Word(pair[0],pair[1]);
    wordsToSearch.push(wordObj);
})

//Create a variable to hold the current best word to search and set it to
//the first entry in wordsToSearch, which has the highest LFS.
let currentBestWord = wordsToSearch[0].text;

//------------DOM Manipulation---------//

//Create variable to store colour codes
const wordleGreen = 'rgb(106, 170, 100)';
const wordleYellow = 'rgb(201, 180, 88)';
const wordleGrey = 'rgb(120, 124, 126)';
const wordleWhite = 'rgb(255, 255, 255)';

//Assign container to a variable
const container = document.querySelector('.container');
createNewRow();
createButton();



//-----------------------------//
//---------FUNCTIONS-----------//
//-----------------------------//

//Create a function to return the best word to play (the first in the wordsToSearch array)
function getBestWord(){
    return wordsToSearch[0].text;
}

//Create a function to remove all the words that contain a certain letter (GREY)
function greyLetterUpdate(letter){
    wordsToSearch = wordsToSearch.filter(word =>{
        const wordArray = word.text.split('');
        return (!wordArray.includes(letter)); 
    })
}

//Create a function to remove all the words that contain a letter in a certain place, but
//do contain that letter somewhere (YELLOW)
function yellowLetterUpdate(letter, index){
    wordsToSearch = wordsToSearch.filter(word =>{
        const wordArray = word.text.split('');
        if (wordArray.includes(letter)){ //Search to see if the letter is in the word
            if (!(wordArray[index] === letter)){ //Check to see if letter is at same index.
                return true; 
            }
        }
        return false
    })
}


//Create a function to remove all the words that don't contain a letter in a certain place (GREEN)
function greenLetterUpdate(letter, index){
    wordsToSearch = wordsToSearch.filter(word =>{
        const wordArray = word.text.split('');
        return (wordArray[index] === letter);
    })
}

//Create a function to provide the current best word to the user
function printCurrentBestWord(){
    console.log("Please play the following word - " + currentBestWord);
}

//Create an export function that receives a string of 5 numbers 0-2 to
//represent the results of the last word. It calls the relevant update
//functions to filter down wordsToSearch
function updateWordsWithResults(results){
    results = results.split('')
    //Use for loop so indes of currentBestWord and results can be matched
    for(i=0;i<5;i++){
        // console.log(results[i]);
        switch(parseInt(results[i])){
            case 0: 
                greyLetterUpdate(currentBestWord[i]);
                break;
            case 1:
                yellowLetterUpdate(currentBestWord[i], i);
                break;
            case 2:
                greenLetterUpdate(currentBestWord[i], i);
                break;
        }
        
    }
    currentBestWord = getBestWord();
}

//----------------DOM Manipulation--------------//

//Create a function to produce a new row of letters and fill it with best word
function createNewRow(){
    //Create div of class 'wordRow'
    const row = document.createElement('div');
    row.classList.add('wordRow', 'currentRow');
    //Get array of letters in currentBestWord
    const bestWordArray = getBestWord().split('');
    //Create five 'letterBox' divs and fill with letters of currentBestWord
    for (i=0;i<5;i++){
        const box = document.createElement('div');
        box.classList.add('letterBox');
        box.innerText = bestWordArray[i].toUpperCase();
        box.style.background = wordleWhite;
        box.style.color = 'black';
        box.addEventListener('click', boxClick)
        row.appendChild(box);
    }
    container.appendChild(row);
}

function createButton(){
    //Create new button element
    const button = document.createElement('button');
    button.innerText = "Submit Results";
    button.disabled = true; //Disable the button so it cannot be pressed to start with
    button.addEventListener('click', resultsSubmitted);
    document.querySelector('body').appendChild(button);
}

//Create a function that enables the submit button if all of the current 
//boxes have had options entered
function enableButtonIfAllBoxesClicked(){
    //Assign button to variable
    const button = document.querySelector('button');
    //Get a nodelist of letterBoxes in currentRow
    const currentLetterBoxes = getCurrentRowBoxes();
    //Create a bool to record whether button should be disabled and set to false
    let disabled = false;
    //Iterate through nodes and set enable to false and break if any have not been clicked 
    for (box of currentLetterBoxes){
        const tc = box.style.color;
        if (tc != 'white'){
            disabled = true;
            break;
        }
    }
    //Set button to disabled if any boxes have not been clicked.
    disableButton(disabled);
}

//Create a function that returns a string of the results based on the 
//user input
function getResultsFromInput(){
    //Get NodeList of all current boxes
    boxes = getCurrentRowBoxes();
    //Create variable to store results string
    let results = '';
    //Iterate through boxes and update results based on background colour
    boxes.forEach(box => {
        //Get background colour of box
        const bc = box.style.background;
        switch (bc){
            case wordleGrey:
                results += '0'; // 0 means the letter was grey
                break;
            case wordleYellow:
                results += '1'; // 1 means the letter was yellow
                break;
            case wordleGreen:
                results += '2'; // 2 means the letter was green
                break;
        }
    })
    console.log(results);
    return results;
}

//Create a function to return the currentRow
function getCurrentRow(){
    return document.querySelector('.currentRow');
}

//Create a function that returns a NodeList of the boxes in the currentRow.
function getCurrentRowBoxes(){
    return document.querySelectorAll('.currentRow > .letterBox');
}

//Create a function to disable/able the button
function disableButton(bool){
    const button = document.querySelector('button');
    button.disabled = bool;
}

//-------------------Callbacks-------------------//

//Create a function to change the background colour of a letterbox when it is clicked.
function boxClick(){
    //Cycle through the background colours
    const bc = this.style.background;
    if (bc === wordleGrey){ 
        this.style.background = wordleYellow;
    }
    else if (bc === wordleYellow){
        this.style.background = wordleGreen;
    }
    else{ //If it is white or green, it will set to grey.
        this.style.background = wordleGrey;
    }
    //If not already, set text colour to white.
    this.style.color = 'white';
    //Check to see if submit button should be enabled.
    enableButtonIfAllBoxesClicked();
}

//Create a function that reads and handles the results when the button is pressed.
function resultsSubmitted(){
    //Get the results inputted by the user
    let results = getResultsFromInput();
    //Pass the results to updateWordsWithResults()
    updateWordsWithResults(results);
    //Remove .currentRow class from the current row
    getCurrentRow().classList.remove('currentRow');
    //Add new row
    createNewRow();
    //Disable button
    disableButton(true);
}