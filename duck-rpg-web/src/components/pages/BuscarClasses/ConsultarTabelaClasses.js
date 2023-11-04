import { useEffect, useState } from "react";

export default function ConsultarTabelaClasses({classSelected}) {

    const [ featuresClass, setFeaturesClass ] = useState([0]);
    const [ removeLoading, setRemoveLoading ] = useState(false);

    useEffect(() => {
        fetch(`https://www.dnd5eapi.co/api/classes/${classSelected}/levels`)
        .then(response => response.json())
        .then(data => {
            setFeaturesClass(data);
            setRemoveLoading(true);
        })
        .catch(error => {
            console.log(error);
            setRemoveLoading(true);
        });
    }, [classSelected]);

    return(
        <div>
            <ul>
                <li className='flex text-center font-bold'>
                    <div className='w-1/12 bg-orange-400'>
                        Level
                    </div>

                    <div className='w-1/12 bg-orange-400'>
                        Proficiency Bonus
                    </div>

                    <div className='w-3/12 bg-orange-400'>
                        Features
                    </div>

                    {featuresClass[0] && featuresClass[0].spellcasting ? (
                            <>
                                {featuresClass[0].spellcasting.cantrips_known && (
                                    <div className="w-1/12 bg-orange-400">
                                        Cantrips Known
                                    </div>
                                )}

                                {featuresClass[0].spellcasting.spells_known && (
                                    <div className="w-1/12 bg-orange-400">
                                        Spells Known
                                    </div>
                                )}
                    
                                {featuresClass[15].spellcasting.spell_slots_level_1 > 0 && (
                                    <div className="w-4/12 bg-orange-400">
                                        Slots<br/>
                                        <div className='flex gap-5 items-center justify-center'>
                                            <p>1st</p>
                                            <p>2st</p>
                                            <p>3st</p>
                                            <p>4st</p>
                                            <p>5st</p>
                                            {featuresClass[15].spellcasting.spell_slots_level_6 > 0 && (
                                                <>
                                                    <p>6st</p>
                                                    <p>7st</p>
                                                    <p>8st</p>
                                                    <p>9st</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {featuresClass[0].spellcasting.spell_slots_level_1 > 0 && featuresClass[15].spellcasting.spell_slots_level_1 === 0 && (
                                    <div className="w-1/12 bg-orange-400">
                                        Slot Level<br/>
                                    </div>
                                )}
                            </>
                        ) : (
                            <></>
                        )}
                </li>


                
                {featuresClass && featuresClass.map((features) => {
                    return(
                        <li className='flex text-center'>
                            <div className='w-1/12 bg-slate-300'>
                                {features.level}<br/>
                            </div>

                            <div className='w-1/12 bg-slate-300'>
                                +{features.prof_bonus}
                            </div>

                            <div className='w-3/12 bg-slate-300'>
                                {features && features.features.map((feature, index) => (
                                <p className = "pr-1">
                                    {index === features.features.length - 1 ? (
                                    <span key={index}>{feature.name}</span>
                                    ) : (
                                    <span key={index}>{feature.name}, </span>
                                    )}
                                </p>
                                ))}
                            </div>
                    
                            {features.spellcasting && (
                                <>
                                    {featuresClass[0].spellcasting.cantrips_known && (
                                        <div className='w-1/12 bg-slate-300'>
                                            {features.spellcasting.cantrips_known}
                                        </div>
                                    )}

                                    {featuresClass[0].spellcasting.spells_known && (
                                        <div className='w-1/12 bg-slate-300'>
                                            {features.spellcasting.spells_known}
                                        </div>
                                    )}

                                    {featuresClass[15].spellcasting.spell_slots_level_1 > 0 && (
                                        <div className="w-4/12 flex gap-8 items-center justify-center bg-slate-300">
                                            <p>
                                                {features.spellcasting.spell_slots_level_1}
                                            </p>
                                            <p>
                                                {features.spellcasting.spell_slots_level_2}
                                            </p>
                                            <p>
                                                {features.spellcasting.spell_slots_level_3}
                                            </p>
                                            <p>
                                                {features.spellcasting.spell_slots_level_4}
                                            </p>
                                            <p>
                                                {features.spellcasting.spell_slots_level_5}
                                            </p>

                                            {featuresClass[15].spellcasting.spell_slots_level_6 > 0 && (
                                                <>
                                                    <p>
                                                        {features.spellcasting.spell_slots_level_6}
                                                    </p>
                                                    <p>
                                                        {features.spellcasting.spell_slots_level_7}
                                                    </p>
                                                    <p>
                                                        {features.spellcasting.spell_slots_level_8}
                                                    </p>
                                                    <p>
                                                        {features.spellcasting.spell_slots_level_9}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    )}

                                    {featuresClass[0].spellcasting.spell_slots_level_1 > 0 && featuresClass[15].spellcasting.spell_slots_level_1 === 0 && (
                                        <div className="w-1/12 flex items-center justify-center bg-slate-300">
                                            <p>{features.spellcasting.spell_slots_level_1 > 0 && (
                                                <>1st - {features.spellcasting.spell_slots_level_1} slots</>
                                            )}</p>

                                            <p>{features.spellcasting.spell_slots_level_2 > 0 && (
                                                <>2st - {features.spellcasting.spell_slots_level_2} slots</>
                                            )}</p>

                                            <p>{features.spellcasting.spell_slots_level_3 > 0 && (
                                                <>3st - {features.spellcasting.spell_slots_level_3} slots</>
                                            )}</p>

                                            <p>{features.spellcasting.spell_slots_level_4 > 0 && (
                                                <>4st - {features.spellcasting.spell_slots_level_4} slots</>
                                            )}</p>

                                            <p>{features.spellcasting.spell_slots_level_5 > 0 && (
                                                <>5st - {features.spellcasting.spell_slots_level_5} slots</>
                                            )}</p>
                                        </div>
                                    )}
                                </>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
